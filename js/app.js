// import getQuestion from './randomQuestion.js';
import clean from './clean.js';
$(()=>{

  let questionArray = [];

  function getQuestion(){
    let url = "http://localhost:3000/questions";
    let question = $('.quizQuestion').find('.text');

    let summaryPage = $('#summary').find('.middle').find('.rightAnswers');
    $.ajax({
      method:	"GET",
      url:	url,
      dataType:	"json"
    }).done((response)=>{
        let answers = $('.answer');
        let randomNumberQuestion = Math.round(Math.random() * (response.length-1));
        let idQuestion = response[randomNumberQuestion].id;
        if (questionArray.indexOf(idQuestion) === -1) {
          questionArray.push(idQuestion);
          let randomQuestion = response[randomNumberQuestion].question;
          let goodAnswer = response[randomNumberQuestion].goodAnswer;
          let badAnswers = response[randomNumberQuestion].badAnswers;
          question.text(randomQuestion);
          let goodAnswerNumber = Math.round((Math.random() * 3));
          let summaryQuestion = $('<div class="question"></div>');
          let summaryAnswer = $('<div class="answers"></div>');

          summaryQuestion.text(randomQuestion);
          summaryPage.append(summaryQuestion);
          summaryPage.append(summaryAnswer);

          for( let i = 0; i<answers.length; i++) {
            $(answers[i]).css('visibility', 'visible');
            for( let j = 0; j<badAnswers.length; j++) {
              if (i === goodAnswerNumber) {
                $(answers[i]).text(goodAnswer);
                $(answers[i]).attr('data-good', 'right')
                $(answers[i]).attr('data-50x50', 'none')
              } else if (i === j && i !== goodAnswerNumber) {
                $(answers[i]).text(badAnswers[j]);
                $(answers[i]).attr('data-good', 'wrong');
                $(answers[i]).attr('data-50x50', 'half');
              } else if (i > j) {
                $(answers[i]).text(badAnswers[goodAnswerNumber]);
                $(answers[i]).attr('data-good', 'wrong');
              }
            }
          };
          let teacherHint = $('.teacherHint').find('.hint');
          let teacherHintNumber = Math.round((Math.random() * 2));
          teacherHint.text(`Na pewno nie jest to odpowiedź "${badAnswers[teacherHintNumber]}"!`);

          let friendAnswer = $('.friendAnswer').find('.hint');
          friendAnswer.text(`Jestem pewien, że jest to odpowiedź "${goodAnswer}"!`);
        } else {
          getQuestion();
        }
    });

  }



  let gameStartButton = $('.button');
  let pageStart = $('#start');
  let categorySelect = $('#category');

  gameStartButton.on('click', ()=>{
    pageStart.css('display', 'none');
    categorySelect.css('display', 'flex');
  });

  let categoryButton = $('.categoryButton');
  let pageQuestion = $('#question');
  let container = $('.container');
  let questionNumber = $('#question').find('.middle').find('h2');

  categoryButton.on('click', ()=>{
    categorySelect.css('display', 'none');
    pageQuestion.css('display', 'flex');
    container.css('display', 'flex');
    questionNumber.text('Pytanie ' + counter);
    clean();
    getQuestion();
  });

  let teacher = $('.teacher');
  let redLineTeacher = teacher.find('.redLine');
  let phone = $('.phone');
  let redLinePhone = phone.find('.redLine');
  let half = $('.half');
  let redLineHalf = half.find('.redLine');
  let teacherHint = $('.teacherHint');
  let friendAnswer = $('.friendAnswer');
  let answers = $('.answer');

  teacher.on('click', ()=>{
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'flex');
    teacher.off("click");
    redLineTeacher.css('display', 'block');
  });
  phone.on('click', ()=>{
    teacherHint.css('display', 'none');
    friendAnswer.css('display', 'flex');
    phone.off("click");
    redLinePhone.css('display', 'block');
  });
  half.on('click', ()=>{
    half.off("click");
    redLineHalf.css('display', 'block');
    let randomHalf = Math.round((Math.random() * 1)+1);
    for(let i = 0; i < answers.length; i++) {
      if ($(answers[3]).data('good') === 'right') {
        $(answers[0]).css('visibility', 'hidden');
        $(answers[randomHalf]).css('visibility', 'hidden');
      } else if ($(answers[i]).data('50x50') === 'half'){
        $(answers[i]).css('visibility', 'hidden');
      }
    };
  })

  let summaryPage = $('#summary');
  let counter = 1;
  let next = $('.next');
  let answerArray = [];
  let index = 0;
  answers.on('click', (event)=> {
    for(let i = 0; i < answers.length; i++) {
      $(answers[i]).css('backgroundColor', '#545E6E')
    };
    $(event.target).css('backgroundColor', '#8D8276');
    answerArray[index] = event.target.outerHTML;
    next.css('display', 'flex');
  })

  function summary(){
    let answersSummary = $('#summary').find('.middle').find('.rightAnswers').find('.answers');
    for(let i = 0; i < answersSummary.length; i++) {
      let questionId = $('<span></span>');
      questionId.text(i+1+'. ');
      $(answersSummary[i]).prev().prepend(questionId);
      for(let j = 0; j < answerArray.length; j++) {
        if (i === j) {
          $(answersSummary[i]).html(answerArray[j]);
        }
      }
    }
  }
  function addClassAndScore() {
    let rightOrWrong = $('#summary').find('.middle').find('.rightAnswers').find('.answers').find('.answer');
    let scoreCounter = 0;
    let score = $('.score');
    for(let i = 0; i < rightOrWrong.length; i++) {
      if ($(rightOrWrong[i]).data('good') === 'right') {
        scoreCounter++;
        $(rightOrWrong[i]).removeClass('answer');
        $(rightOrWrong[i]).css('backgroundColor', 'inherit');
        $(rightOrWrong[i]).addClass('right');
      } else {
        $(rightOrWrong[i]).removeClass('answer');
        $(rightOrWrong[i]).css('backgroundColor', 'inherit');
        $(rightOrWrong[i]).addClass('wrong');
      }
    }
    score.text(scoreCounter);
  }

  let footer = $('footer');
  let playAgain = $('.playAgain');
  next.on('click', (event)=>{
    index++;
    for(let i = 0; i < answers.length; i++) {
      $(answers[i]).css('backgroundColor', '#545E6E');
    }
    $(event.target).css('display', 'none');
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'none');

    if (counter < 1) {
      clean();
      getQuestion();
      counter = counter + 1;
      questionNumber.text('Pytanie ' + counter);
    } else {
      pageQuestion.css('display', 'none');
      summaryPage.css('display', 'flex');
      footer.css('justifyContent', 'center');
      playAgain.css('display', 'flex');
      phone.css('display', 'none');
      teacher.css('display', 'none');
      half.css('display', 'none');
      summary();
      addClassAndScore();
    }
  })

  playAgain.on('click', ()=>{
    console.log('Działa!');
  })

});
