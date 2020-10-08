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
    //to show the number of question
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
    new listQuestion("Mohammed- - - - - -arrive on time.", ["was", "will", "is", "am"], "will"),
    new listQuestion("we will- - - - - -your father tomorrow", ["seeing", "see", "to see", "saw"], "see"),
    new listQuestion("I do not think- - - - - -go to school next week.", ["I am", "I will", "I will to", "I won't"], "I will"),
    new listQuestion("It- - - - - tomorrow in the afternoon.", ["will rain", "rain", "raining", "rain"], "will rain"),
    new listQuestion("Mohammed and Heba are - - - - - - -meet someday soon", ["go to", "going", "going to", "went"], "going to"),
   new listQuestion("She- - - - - -love the pasta you cooked",["go to", "going", "is going to", "went"],"is going to"),
   new  listQuestion("Sara will- - - - - - -to the office tomorrow morning",["come", "is going to come", "is coming", "came"], "come"),
   new listQuestion("- - - - - you go to the party with me", ["Will", "Did", "Are", "Is"], "Will"),
   new listQuestion("- - - - - -  you help me cleaning the house", ["Do", "Did", "Are", "Will"], "Will"),
   new listQuestion("Trump- - - - -be the next President.", ["is going to", "going", "will", "is"], "will")
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