import getQuestion from './randomQuestion.js';
$(()=>{

  let gameStartButton = $('.button');
  let pageStart = $('#start');
  let pageQuestion = $('#question');
  let container = $('.container');
  gameStartButton.on('click', ()=>{
    pageStart.css('display', 'none');
    pageQuestion.css('display', 'flex');
    container.css('display', 'flex');
  });

  let teacher = $('.teacher');
  let phone = $('.phone');
  let teacherHint = $('.teacherHint');
  let friendAnswer = $('.friendAnswer');
  teacher.on('click', ()=>{
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'flex');
  });
  phone.on('click', ()=>{
    teacherHint.css('display', 'none');
    friendAnswer.css('display', 'flex');
  })

getQuestion();

});
