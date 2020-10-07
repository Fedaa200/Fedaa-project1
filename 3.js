function populate(){
	if(Qize.isEended()){
		//showScore();
	}
	else{
		//
		var element=document.getElementById('questions')
	element.innerHTML=Qize.getquestionsIndex().text;
	}

}
var questions = [
   new qu("   I as a teacher.",[ "work", "works", "working"], "work" )
   new qu("He   English everyday",["study", "studies", "studying"], "studies")
];

var Qize= new qize(questions);

populate();

