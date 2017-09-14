function getQuestion(){
  let url = "http://localhost:3000/questions";
  let question = $('.quizQuestion').find('.text');
  let array = [];
  let answers = $('.answer');
  $.ajax({
    method:	"GET",
    url:	url,
    dataType:	"json"
  }).done((response)=>{
      let randomNumberQuestion = Math.round(Math.random() * (response.length-1));
      let randomQuestion = response[randomNumberQuestion].question;
      let goodAnswer = response[randomNumberQuestion].goodAnswer;
      let badAnswers = response[randomNumberQuestion].badAnswers;
      question.text(randomQuestion);
      let goodAnswerNumber = Math.round((Math.random() * 3));
      for( let i = 0; i<answers.length; i++) {
        for( let j = 0; j<badAnswers.length; j++) {
          if (i === goodAnswerNumber) {
            $(answers[i]).text(goodAnswer);
            $(answers[i]).attr('data-good', 'true')
          } else if (i === j && i !== goodAnswerNumber) {
            $(answers[i]).text(badAnswers[j]);
            $(answers[i]).attr('data-good', 'false');
            $(answers[i]).attr('data-50x50', 'half');
          } else if (i > j) {
            $(answers[i]).text(badAnswers[goodAnswerNumber]);
            $(answers[i]).attr('data-good', 'false');
          }
        }
      };

      let teacherHint = $('.teacherHint').find('.hint');
      let teacherHintNumber = Math.round((Math.random() * 2));
      teacherHint.text(`Na pewno nie jest to odpowiedź "${badAnswers[teacherHintNumber]}"!`);

      let friendAnswer = $('.friendAnswer').find('.hint');
      friendAnswer.text(`Jestem pewien, że jest to odpowiedź "${goodAnswer}"!`);


  });
}

export default getQuestion;
