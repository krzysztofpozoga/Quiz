function clean(){
  let question = $('.quizQuestion').find('.text');
  question.text('');
  let answers = $('.answer');
  for( let i = 0; i<answers.length; i++) {
    $(answers[i]).removeAttr('data-good');

    $(answers[i]).text('');
  }
}

export default clean;
