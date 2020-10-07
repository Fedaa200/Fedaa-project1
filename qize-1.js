
function makeQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
makeQuiz.prototype.getQuestionIndex = function() {

    return this.questions[this.questionIndex];
}
 
makeQuiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
makeQuiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function listQuestion(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
listQuestion.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function finishQues() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        finishQues();
    }
};
 
 
function showProgress() {
    var questionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + questionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var resultScore = "<h1>The Final Mark</h1>";
    resultScore += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = resultScore;
};
 
// create questions here
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





$("#back").click(function(){
    var firstpage ="file:///C:/Users/F5/Desktop/Fedaa-project1/seconed.html"
    window.open(firstpage)
})