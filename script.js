//create all variables from the HTML that you will manipulate
var containerEl = document.querySelector("#modal-container");
var timerEL = document.querySelector("#time");
var score = 0;
var timeLeft = 60; //how to count down time?
//OBJECT----create the questions, answer options and correct answer
var listQuestions = [
  {
    questions: "What can you use to change the color of text?",
    answersOptions: [
      "Background-Color",
      "color",
      "font-style",
      "text-decoration"
    ],
    answer: 2
  },
  {
    questions: "What is NOT a Data Type?",
    answerOptions: ["Boolean", "Number", "function", "String"],
    answer: 3
  },
  {
    questions: "How do you link your JavaScript?",
    answerOptions: ["Script>", "Link>", "h1>", "body>"],
    answer: 1
  },
  {
    questions: "What is used in HTML?",
    answerOptions: ["<body>", "<header>", "<a>", "All of the above"],
    answer: 4
  },
  {
    questions: "What do you use to group together an Array?",
    answerOptions: ['" "', "{ }", "[ ]", "< >"],
    answer: 3
  }
];

var questionIndex = listQuestions.questions;
var answer = listQuestions.answerOptions;

//create questionIndex with all the right questions-use this to compare correct answer
//prompt the questions create a loop to go through the object and ask the questions
//answers need to be stored into an array this would go into the userArray
//create buttons to match answer key
//add event listener to the button to signify the answers
//create userAnswers-array
function generateQuiz() {
  var userAnswers = [];
  var correctAnswers = listQuestions.answer[i];
  for (var i = 0; i < questions.length; i++) {
    correctAnswers = [];
  }
}

//score keeping
//display score---GAME IS OVER!!
//make sure to add eventdelegation!!
//save the results and put initials-this involve localStorage
function showResults() {
  if (listQuestions[i].answer) {
    score++;
  } else {
    score--;
    timeLeft - 10;
  }
}

//counting down - when it hits zero stop the quiz set time = 0;
//wrong answer subtracts ten seconds from allotted time
function timer() {
  var timerInt = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft + ": second left!";

    if (timeleft === 0) {
      clearInterval(timerInt);
      showResults();
    }
  }, 1000);
}
// function renderQuestions(){

for (var i = 0; i < questionIndex.length; i++) {
  var userAnswers = confirm(questionIndex[i]);
  if (userAnswers === correctAnswer[i]) {
    score++;
  } else {
    score--;
    time--;
  }
}
// }

//start timer to count down function to call on when the click of image goes away.
//MAYBE have a picture first then make it go away when they click start ---event listener
function imageDisplay() {
  containerEl.style.display = "none";
}
//create start button
container.addEventListener("click", imageDisplay);
