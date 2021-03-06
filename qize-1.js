//function to do the question
function makeQuiz(questions) {
    //decleare the value of score to start from 0
    this.score = 0;
    this.questions = questions;
    //the index of array that has inside it the question should start from 0
    this.questionIndex = 0;
}
 
makeQuiz.prototype.getQuestionIndex = function() {

    return this.questions[this.questionIndex];
}
//function to chick the answer 
makeQuiz.prototype.guess = function(answer) {
    //we do if statment 
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        //if the aswer correct will give the score +1
        this.score++;
    }
 //also +1 for the question
    this.questionIndex++;
}
 //this function work when the question finish=(numbers of question === question.length)
makeQuiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
//make function to can write  vlues of(text=question) and the choices inside the array, and the correct answer
//and put it in array 
function listQuestion(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
//function to chick if the answer we choiec is correct or not  
listQuestion.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
//make function to show the score if the qize finish 
function finishQues() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //if it not finish it need to show the next question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
       //do for loop inside the choice array
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};

 //make function to guess if the qize finish or not
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        finishQues();
    }
};
 
 //make function to know the number of question you in it or you answer it
function showProgress() {
    var questionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + questionNumber + " of " + quiz.questions.length;
};
 
 //function to show your result (how many correct answer you git it)
function showScores() {
    var resultScore = "<h1>The Final Mark</h1>";
    resultScore += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = resultScore;
};
 
// write array that have a qestion and array of choices and the correct answer
var questions = [
    new listQuestion("I- - - - -  as a teacher", ["work", "works", "working", "workes"], "work"),
    new listQuestion(" He  - - - - -  English everyday.", ["study", "studies", "studying", "studyes"], "studies"),
    new listQuestion("- - - - - -  Ali  play football on Monday?", ["Is", "Do", "Does", "Are"], "Does"),
    new listQuestion(" A policeman - - - - - - - catch good people.", ["is", "don't", "doesn't","not"], "doesn't"),
    new listQuestion("They - - - - - go to school on Fridays", ["are","doesn't", "don't", "am not"], "don't"),
   new listQuestion("Which sentence is in the Simple Present?",["He can a bike ride.","He can ride a bike.","He can rides a bike.","He cans ride a bike." ],"He can ride a bike."),
   new  listQuestion("Mandy and Susan- - - - - - films every weekend",["watches", "watch", "watchs", "watching"], "watch"),
   new listQuestion("John often - - - - - - handball.", ["play", "playes", "plays", "plaies"], "playes"),
   new listQuestion("In which sentence is the Simple Present used correctly?", ["Andrew wash the dishes.", "Andrew washes the dishes.", "Andrew washs the dishes.", "Andrew washies the dishes."], "Andrew washes the dishes."),
   new listQuestion("It - - - -  - - a beautiful day today.", ["am", "are", "be", "is"], "is")
];
 
// create quiz
var quiz = new makeQuiz(questions);
 
// display quiz
finishQues();




//make function when you click on back button it will back you to the first page

$("#back").click(function(){
    
    var firstpage ="file:///C:/Users/F5/Desktop/Fedaa-project1/seconed.html"
    window.open(firstpage)


})