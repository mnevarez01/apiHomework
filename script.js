//create all variables from the HTML that you will manipulate

var container = document.querySelector("#modal-container");

//variables for questions: ??
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");
// var li5 = document.createElement("li");

// var listQuestions = document.getElementById("li");
// var score = 0;

// var listQuestions = [
//     { questions: "What can you use to change the color of text?";
//         answersOptions: [ "Background-Color", "color", "font-style", "text-decoration"];
//         answer:  2;
// },
//     { questions: "What is NOT a Data Type?";
//     answerOptions:["Boolean", "Number","function", "String"];
//     answer: 3;
// },
//     { questions:"How do you link your JavaScript?";
//     answerOptions: ["Script>", "Link>", "h1>", "body>"];
//     answer:  1;
// },
//     { questions: "What is used in HTML?";
//     answerOptions: ["<body>", "<header>", "<a>", "All of the above"];
//     answer: 4;
// },
//     { questions::"What do you use to group together an Array?";
//     answerOptions:['" "', "{ }", "[ ]", "< >"];
//     answer: 3;
// }

// ]
// var questionIndex = listQuestions.questions
// var answer = listQuestions.answerOptions
// var correctAnswer =  listQuestions.answer

// for ( var i = 0; i <questionIndex.length; i++){
// var userAnswers = confirm(questionIndex[i]);

// }

function imageDisplay() {
  container.style.display = "none";
}

container.addEventListener("click", imageDisplay);

//create start button
//MAYBE have a picture first then make it go away when they click start ---event listener
//OBJECT----create the questions, answer options and correct answer
//create questionIndex with all the right questions-use this to compare correct answer
//prompt the questions create a loop to go through the object and ask the questions
//answers need to be stored into an array this would go into the userArray
//create buttons to match answer key
//add event listener to the button to signify the answers
//create userAnswers-array
//score keeping
//display score---GAME IS OVER!!
//make sure to add eventdelegation!!
//counting down - when it hits zero stop the quiz set time = 0;
//wrong answer subtracts ten seconds from allotted time
//save the results and put initials-this involve localStorage
