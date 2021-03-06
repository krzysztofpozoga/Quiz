import clean from './clean.js';
import * as Firebase from 'firebase';
$(()=>{

  let gameStartButton = $('.button');
  let pageStart = $('#start');
  let categorySelect = $('#category');
  gameStartButton.on('click', ()=>{
    pageStart.css('display', 'none');
    categorySelect.css('display', 'flex');
  });

  const config = {
      apiKey: "AIzaSyCO1wIpXqCaxjyZInO1Djg-k0ngVV-sXxo",
      authDomain: "hisquiz.firebaseapp.com",
      databaseURL: "https://hisquiz.firebaseio.com",
      projectId: "hisquiz",
      storageBucket: "",
      messagingSenderId: "843638065814"
    };
  let fb = Firebase.initializeApp(config);
  let db = fb.database().ref();
  db.on('value', snap => {
    let categoryButton = $('.categoryButton');
    let choseCategory = '';
    let questionArray = [];
    function getQuestion(){
      let question = $('.quizQuestion').find('.text');
      let summaryPage = $('#summary').find('.middle').find('.rightAnswers');
      let response = snap.val().category;
      let answers = $('.answer');
      let randomNumberQuestion = Math.round(Math.random() * (response[choseCategory].length-1));
      let idQuestion = response[choseCategory][randomNumberQuestion].id;
      if (questionArray.indexOf(idQuestion) === -1) {
        questionArray.push(idQuestion);
        let randomQuestion = response[choseCategory][randomNumberQuestion].question;
        let goodAnswer = response[choseCategory][randomNumberQuestion].goodAnswer;
        let badAnswers = response[choseCategory][randomNumberQuestion].badAnswers;
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
            } else if (i === j && i !== goodAnswerNumber) {
              $(answers[i]).text(badAnswers[j]);
              $(answers[i]).attr('data-good', 'wrong');
            } else if (i > j) {
              $(answers[i]).text(badAnswers[goodAnswerNumber]);
              $(answers[i]).attr('data-good', 'wrong');
            }
          }
        };
        let teacherHint = $('.teacherHint').find('.hint');
        let teacherHintNumber = Math.round((Math.random() * 2));
        teacherHint.text(`Na pewno nie jest to odpowiedź: "${badAnswers[teacherHintNumber]}"!`);

        let friendAnswer = $('.friendAnswer').find('.hint');
        friendAnswer.text(`Jestem pewien, że jest to odpowiedź: "${goodAnswer}"!`);
      } else {
        getQuestion();
      }
    };

    let pageQuestion = $('#question');
    let container = $('.container');
    let questionNumber = $('#question').find('.middle').find('h2');
    categoryButton.on('click', (event)=>{
      choseCategory = $(event.target).data('category');
      categorySelect.css('display', 'none');
      pageQuestion.css('display', 'flex');
      container.css('display', 'flex');
      questionNumber.text('Pytanie ' + counter);
      clean();
      getQuestion();
    });

    let teacher = $('.teacher');
    let redLineTeacher = teacher.find('.redLine');
    let tooltipTeacher = teacher.find('.tooltip');
    let phone = $('.phone');
    let redLinePhone = phone.find('.redLine');
    let tooltipPhone = phone.find('.tooltip');
    let half = $('.half');
    let redLineHalf = half.find('.redLine');
    let tooltipHalf = half.find('.tooltip');
    let teacherHint = $('.teacherHint');
    let friendAnswer = $('.friendAnswer');
    let answers = $('.answer');
    teacher.on('click', ()=>{
      friendAnswer.css('display', 'none');
      teacherHint.css('display', 'flex');
      teacher.off("click");
      tooltipTeacher.css('textDecoration', 'line-through');
      redLineTeacher.css('display', 'block');
    });
    phone.on('click', ()=>{
      teacherHint.css('display', 'none');
      friendAnswer.css('display', 'flex');
      phone.off("click");
      tooltipPhone.css('textDecoration', 'line-through');
      redLinePhone.css('display', 'block');
    });
    half.on('click', ()=>{
      let questionAnswers = $('.answer');
      teacherHint.css('display', 'none');
      friendAnswer.css('display', 'none');
      half.off("click");
      tooltipHalf.css('textDecoration', 'line-through');
      redLineHalf.css('display', 'block');
      for(let i = 0; i < questionAnswers.length; i++) {
        if ($(questionAnswers[3]).data('good') === 'right') {
          $(questionAnswers[1]).css('visibility', 'hidden');
          $(questionAnswers[2]).css('visibility', 'hidden');
          teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[0]).text()}"!`);
        } else if ($(questionAnswers[2]).data('good') === 'right'){
          $(questionAnswers[0]).css('visibility', 'hidden');
          $(questionAnswers[3]).css('visibility', 'hidden');
          teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[1]).text()}"!`);
        }
        else if ($(questionAnswers[1]).data('good') === 'right'){
          $(questionAnswers[0]).css('visibility', 'hidden');
          $(questionAnswers[2]).css('visibility', 'hidden');
          teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[3]).text()}"!`);
        }
        else if ($(questionAnswers[0]).data('good') === 'right'){
          $(questionAnswers[1]).css('visibility', 'hidden');
          $(questionAnswers[3]).css('visibility', 'hidden');
          teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[2]).text()}"!`);
        }
      }
    });

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
    });

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
    };

    let scoreCounter = 0;
    function addClassAndScore() {
      let rightOrWrong = $('#summary').find('.middle').find('.rightAnswers').find('.answers').find('.answer');
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
    };

    let footer = $('footer');
    let playAgain = $('.playAgain');
    let progressBar = $('.progressBar').find('span');
    let progress = (100/20)*counter;
    next.on('click', (event)=>{
      index++;
      for(let i = 0; i < answers.length; i++) {
        $(answers[i]).css('backgroundColor', '#545E6E');
      }
      $(event.target).css('display', 'none');
      friendAnswer.css('display', 'none');
      teacherHint.css('display', 'none');
      if (counter < 20) {
        clean();
        getQuestion();
        counter = counter + 1;
        progress = (100/20)*counter;
        if (counter <= 5) {
          $(progressBar).css('height', `${progress}%`);
        } else if (counter <= 10) {
          $(progressBar).css('backgroundColor', 'orange');
          $(progressBar).css('height', `${progress}%`);
        } else if (counter <= 15) {
          $(progressBar).css('backgroundColor', 'yellow');
          $(progressBar).css('height', `${progress}%`);
        } else {
          $(progressBar).css('backgroundColor', 'green');
          $(progressBar).css('height', `${progress}%`);
        }
        questionNumber.text('Pytanie ' + counter);
      } else {
        pageQuestion.css('display', 'none');
        summaryPage.css('display', 'flex');
        footer.css('justifyContent', 'center');
        playAgain.css('display', 'flex');
        container.css('display', 'none');
        summary();
        addClassAndScore();
      }
    });

    playAgain.on('click', (event)=>{
      let middle = $('#question').find('.middle').find('.row');
      for(let i = 1; i< middle.length; i++){
        $(middle[i]).html("<div class='answer'></div><div class='answer'></div>")
      };
      questionArray = [];
      answerArray = [];
      index = 0;
      scoreCounter = 0;
      counter = 1;
      $(progressBar).css('backgroundColor', 'red');
      $(progressBar).css('height', '5%');
      $(event.target).css('display', 'none');
      tooltipTeacher.css('textDecoration', 'none');
      tooltipPhone.css('textDecoration', 'none');
      tooltipHalf.css('textDecoration', 'none');
      footer.css('justifyContent', 'flex-end');
      summaryPage.css('display', 'none');
      categorySelect.css('display', 'flex');
      answers = $('.answer');
      answers.on('click', (event)=> {
        for(let i = 0; i < answers.length; i++) {
          $(answers[i]).css('backgroundColor', '#545E6E')
        };
        $(event.target).css('backgroundColor', '#8D8276');
        answerArray[index] = event.target.outerHTML;
        next.css('display', 'flex');
      });
      teacher.on('click', ()=>{
        friendAnswer.css('display', 'none');
        teacherHint.css('display', 'flex');
        teacher.off("click");
        tooltipTeacher.css('textDecoration', 'line-through');
        redLineTeacher.css('display', 'block');
      });
      phone.on('click', ()=>{
        teacherHint.css('display', 'none');
        friendAnswer.css('display', 'flex');
        phone.off("click");
        tooltipPhone.css('textDecoration', 'line-through');
        redLinePhone.css('display', 'block');
      });
      half.on('click', ()=>{
        let questionAnswers = $('.answer');
        half.off("click");
        tooltipHalf.css('textDecoration', 'line-through');
        redLineHalf.css('display', 'block');
        for(let i = 0; i < questionAnswers.length; i++) {
          if ($(questionAnswers[3]).data('good') === 'right') {
            $(questionAnswers[1]).css('visibility', 'hidden');
            $(questionAnswers[2]).css('visibility', 'hidden');
            teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[0]).text()}"!`);
          } else if ($(questionAnswers[2]).data('good') === 'right'){
            $(questionAnswers[0]).css('visibility', 'hidden');
            $(questionAnswers[3]).css('visibility', 'hidden');
            teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[1]).text()}"!`);
          }
          else if ($(questionAnswers[1]).data('good') === 'right'){
            $(questionAnswers[0]).css('visibility', 'hidden');
            $(questionAnswers[2]).css('visibility', 'hidden');
            teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[3]).text()}"!`);
          }
          else if ($(questionAnswers[0]).data('good') === 'right'){
            $(questionAnswers[1]).css('visibility', 'hidden');
            $(questionAnswers[3]).css('visibility', 'hidden');
            teacherHint.find('.hint').text(`Na pewno nie jest to odpowiedź "${$(questionAnswers[2]).text()}"!`);
          }
        }
      });
      redLineHalf.css('display', 'none');
      redLineTeacher.css('display', 'none');
      redLinePhone.css('display', 'none');
      let rightAnswers = $('#summary').find('.middle').find('.rightAnswers');
      rightAnswers.html('');
    })
  });
});
