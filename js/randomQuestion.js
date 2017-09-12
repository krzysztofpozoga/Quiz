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
            $(answers[i]).text(goodAnswer)
          } else if (i === j && i !== goodAnswerNumber) {
            $(answers[i]).text(badAnswers[j])
          } else if (i > j) {
            $(answers[i]).text(badAnswers[goodAnswerNumber])
          }
        }
      }
  });
}

export default getQuestion;
