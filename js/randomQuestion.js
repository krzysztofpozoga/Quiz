function getQuestion(){
  let url = "http://localhost:3000/questions";
  $.ajax({
    method:	"GET",
    url:	url,
    dataType:	"json"
  }).done((response)=>{
      console.log(response);
  });
}

export default getQuestion;
