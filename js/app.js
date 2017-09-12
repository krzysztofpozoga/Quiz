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
  let half = $('.half');
  let teacherHint = $('.teacherHint');
  let friendAnswer = $('.friendAnswer');
  let answers = $('.answer');
  teacher.on('click', ()=>{
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'flex');
  });
  phone.on('click', ()=>{
    teacherHint.css('display', 'none');
    friendAnswer.css('display', 'flex');
  });
  half.on('click', ()=>{
    for(let i = 0; i < answers.length; i++) {
      if ($(answers[i]).data('50x50') === 'half') {
        $(answers[i]).css('visibility', 'hidden');
      }
    };

  })

getQuestion();

});
