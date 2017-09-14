import getQuestion from './randomQuestion.js';
$(()=>{

  let gameStartButton = $('.button');
  let categoryButton = $('.categoryButton');
  let pageStart = $('#start');
  let pageQuestion = $('#question');
  let categorySelect = $('#category');
  let container = $('.container');
  let questionNumber = $('#question').find('.middle').find('h2');
  let counter = 1;
  gameStartButton.on('click', ()=>{
    pageStart.css('display', 'none');
    categorySelect.css('display', 'flex');
    // pageQuestion.css('display', 'flex');
    // container.css('display', 'flex');
    // questionNumber.text('Pytanie ' + counter);
    // getQuestion();
  });

  categoryButton.on('click', ()=>{
    categorySelect.css('display', 'none');
    pageQuestion.css('display', 'flex');
    container.css('display', 'flex');
    questionNumber.text('Pytanie ' + counter);
    getQuestion();
  });



  let teacher = $('.teacher');
  let phone = $('.phone');
  let half = $('.half');
  let teacherHint = $('.teacherHint');
  let friendAnswer = $('.friendAnswer');
  let answers = $('.answer');
  teacher.on('click', ()=>{
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'flex');
    teacher.off("click");
  });
  phone.on('click', ()=>{
    teacherHint.css('display', 'none');
    friendAnswer.css('display', 'flex');
    phone.off("click");
  });
  half.on('click', ()=>{
    half.off("click");
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

  answers.on('click', ()=> {
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'none');
    for(let i = 0; i < answers.length; i++) {
      $(answers[i]).css('visibility', 'visible');
    }
    getQuestion();
    counter++;
    questionNumber.text('Pytanie ' + counter);
  })



});
