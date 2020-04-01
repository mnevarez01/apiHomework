//create all variables from the HTML that you will manipulate
var listQuestions = [
  {
    questions: "What can you use to change the color of text?",
    choices: ["Background-Color", "color", "font-style", "text-decoration"],
    answer: "color"
  },
  {
    questions: "What is NOT a Data Type?",
    choices: ["Boolean", "Number", "function", "String"],
    answer: "function"
  },
  {
    questions: "How do you link your JavaScript?",
    choices: ["Script>", "Link>", "h1>", "body>"],
    answer: "Script>"
  },
  {
    questions: "What is used in HTML?",
    choices: ["<body>", "<header>", "<a>", "All of the above"],
    answer: "All of the above"
  },
  {
    questions: "What do you use to group together an Array?",
    choices: ['" "', "{ }", "[ ]", "< >"],
    answer: "[ ]"
  }
];

var currentQuestionIndex = 0;
var time = listQuestions.length * 15;
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

function startQuiz() {
  var startScreenEl = document.getElementById("modal-container");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(countDown, 1000);
  timerEl.textContent = time;
  startQuestions();
}

function startQuestions() {
  var currentQuestion = listQuestions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.questions;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value !== listQuestions[currentQuestionIndex].answer) {
    time = time - 15;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "wrong";
  } else {
    feedbackEl.textContent = "right";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  currentQuestionIndex++;
  if (currentQuestionIndex === listQuestions.length) {
    finishQuiz();
  } else {
    startQuestions();
  }
}

function finishQuiz() {
  clearInterval(timerId);
  var startScreenEl = document.getElementById("modal-container");
  startScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("finalDisplay");
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

function saveHighScore() {
  var initials = initialsEL.value.trim();
  if (initals !== "") {
    var highScores = JSON.parse(window.localStorage.getItem(highScores)) || [];
    var newScore = {
      score: time,
      initials: initials
    };
    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
  }
}

function checkforEnter(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}

startBtn.addEventListener("click", startQuiz);
submitBtn.onclick = saveHighScore;
initialsEL.onkeyup = checkforEnter;
