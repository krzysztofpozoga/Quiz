$(function(){

  let gameStartButton = $('.button');
  let pageStart = $('#start');
  let pageQuestion = $('#question');
  gameStartButton.on('click', function(){
    pageStart.css('display', 'none');
    pageQuestion.css('display', 'flex');
  });

  let teacher = $('.teacher');
  let phone = $('.phone');
  let teacherHint = $('.teacherHint');
  let friendAnswer = $('.friendAnswer');
  teacher.on('click', function(){
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'flex');
  });
  phone.on('click', function(){
    teacherHint.css('display', 'none');
    friendAnswer.css('display', 'flex');
  })


});
