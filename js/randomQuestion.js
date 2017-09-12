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
      question.text(randomQuestion);
      let goodAnswerNumber = Math.round((Math.random() * 3) + 1);
      answers.each((i, elem)=> {
        if ($(elem).data('number') === goodAnswerNumber) {
          $(elem).text(goodAnswer)
        } 
      })
  });
}

export default getQuestion;
