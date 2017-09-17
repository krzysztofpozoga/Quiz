import getQuestion from './randomQuestion.js';
$(()=>{

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
      if ($(answers[3]).data('good') === true) {
        $(answers[0]).css('visibility', 'hidden');
        $(answers[randomHalf]).css('visibility', 'hidden');
      } else if ($(answers[i]).data('50x50') === 'half'){
        $(answers[i]).css('visibility', 'hidden');
      }
    };
  })

  let score = $('.score');
  let summaryPage = $('#summary');
  let counter = 1;
  let scoreCounter = 0;
  score.text(scoreCounter);

  answers.on('click', (event)=> {
    if ($(event.target).data('good') === true) {
      scoreCounter = scoreCounter + 1;
      score.text(scoreCounter);
    }
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'none');

    if (counter < 5) {
      getQuestion();
      counter = counter + 1;
      questionNumber.text('Pytanie ' + counter);
    } else {
      pageQuestion.css('display', 'none');
      summaryPage.css('display', 'flex');
      phone.css('display', 'none');
      teacher.css('display', 'none');
      half.css('display', 'none');
    }
  })

});
