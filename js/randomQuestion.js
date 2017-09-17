function getQuestion(){
  let url = "http://localhost:3000/questions";
  let question = $('.quizQuestion').find('.text');
  let answers = $('.answer');
  let summaryPage = $('#summary').find('.middle').find('.rightAnswers');
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

      let score = $('.score');

      let summaryQuestion = $('<div class="question"></div>');
      let summaryAnswer = $(`<div class="answers"><div>${goodAnswer}</div><div>${badAnswers[0]}</div><div>${badAnswers[1]}</div><div>${badAnswers[2]}</div></div>`);

      summaryQuestion.text(randomQuestion);
      summaryPage.append(summaryQuestion);
      summaryPage.append(summaryAnswer);

      for( let i = 0; i<answers.length; i++) {
        $(answers[i]).css('visibility', 'visible');
        for( let j = 0; j<badAnswers.length; j++) {
          if (i === goodAnswerNumber) {
            $(answers[i]).text(goodAnswer);
            $(answers[i]).attr('data-good', 'true')
            $(answers[i]).attr('data-50x50', 'none')
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
