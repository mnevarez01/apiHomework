//create all variables from the HTML that you will manipulate
var currentQuestionIndex = 0;
var time = 60;
var score = 0;
var timerId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("startBtn");
var initialsEL = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

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
    answer: "color"
  },
  {
    questions: "What is NOT a Data Type?",
    answerOptions: ["Boolean", "Number", "function", "String"],
    answer: "function"
  },
  {
    questions: "How do you link your JavaScript?",
    answerOptions: ["Script>", "Link>", "h1>", "body>"],
    answer: "Script>"
  },
  {
    questions: "What is used in HTML?",
    answerOptions: ["<body>", "<header>", "<a>", "All of the above"],
    answer: "All of the above"
  },
  {
    questions: "What do you use to group together an Array?",
    answerOptions: ['" "', "{ }", "[ ]", "< >"],
    answer: "[ ]"
  }
];

function startQuiz(event) {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  startQuestions();
}

function startQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = listQuestions[i].questions;
  choicesEl.innerHTML = "";
}

function answerOptions() {
  for (i = 0; i < questions.length; i++) {
    var correctAnswers = listQuestions.answer;
    if (userAnswers === answerOptions[i]) {
      score++;
    } else {
      score--;
      time - 10;
      alert("not quite right!");
    }
  }
}

function finishQuiz() {
  clearInterval(timerId);
  var startScreenEl;
  startScreenEl.removeAttribute("class");
  var finalScore;
  finalScoreEl.textContent.time = time;
  questionsEl.setAttribute("class", "hide");
}

function countDown() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    finnishQuiz();
  }
}

startBtn.addEventListener("click", startQuiz);
