$(function(){

  let gameStartButton = $('.button');
  let pageStart = $('#start');
  let pageQuestion = $('#question');
  gameStartButton.on('click', function(){
    pageStart.css('display', 'none');
    pageQuestion.css('display', 'flex');
  })

});
