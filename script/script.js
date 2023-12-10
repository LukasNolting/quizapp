let questions = [
  {
    question: "Welcher Kontinent ist der größte?",
    answer_1: "Afrika",
    answer_2: "Europa",
    answer_3: "Asien",
    answer_4: "Nordamerika",
    right_answer: 3,
  },
  {
    question: "Welcher Ozean liegt östlich von Afrika?",
    answer_1: "Atlantischer Ozean",
    answer_2: "Indischer Ozean",
    answer_3: "Pazifischer Ozean",
    answer_4: "Südlicher Ozean",
    right_answer: 2,
  },
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answer_1: "Paris",
    answer_2: "Berlin",
    answer_3: "Rom",
    answer_4: "Madrid",
    right_answer: 2,
  },
  {
    question: "Welcher Fluss fließt durch Ägypten?",
    answer_1: "Nil",
    answer_2: "Rhein",
    answer_3: "Amazonas",
    answer_4: "Mississippi",
    right_answer: 1,
  },
  {
    question: "Welches Land liegt südlich von Australien?",
    answer_1: "Kanada",
    answer_2: "Indien",
    answer_3: "Neuseeland",
    answer_4: "Mexiko",
    right_answer: 3,
  },
];

let rightAnswersCount = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("./audio/success.wav");
AUDIO_SUCCESS.volume = 0.3;
let AUDIO_FAIL = new Audio("./audio/fail.wav");
AUDIO_FAIL.volume = 0.3;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    showNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("question-text").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressBar() {
  let percent = currentQuestion / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}

function showEndScreen() {
  document.getElementById("endScreen").classList.remove("d-none");
  document.getElementById("questionBody").classList.add("d-none");
  document.getElementById("all-questions-end").innerHTML = questions.length;
  document.getElementById("right_ans").innerHTML = rightAnswersCount;
  document.getElementById("header-image").src = "./img/trophy.png";
  document.getElementById("progress-bar").innerHTML = `100 %`;
  document.getElementById("progress-bar").style = `width: 100%;`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  if (rightAnswerSelected(selectedQuestionNumber, question)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightAnswersCount++;
    AUDIO_SUCCESS.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById("answer_" + question["right_answer"])
      .parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
  removeClickAnswers();
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question["right_answer"];
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  addClickAnswers();
}

function restartGame() {
  document.getElementById("header-image").src = "./img/background.jpg";
  document.getElementById("endScreen").classList.add("d-none");
  document.getElementById("questionBody").classList.remove("d-none");
  rightAnswersCount = 0;
  currentQuestion = 0;
  init();
}

function removeClickAnswers() {
  document.getElementById("answer_1").parentNode.classList.add("no-click");
  document.getElementById("answer_2").parentNode.classList.add("no-click");
  document.getElementById("answer_3").parentNode.classList.add("no-click");
  document.getElementById("answer_4").parentNode.classList.add("no-click");
}

function addClickAnswers() {
  document.getElementById("answer_1").parentNode.classList.remove("no-click");
  document.getElementById("answer_2").parentNode.classList.remove("no-click");
  document.getElementById("answer_3").parentNode.classList.remove("no-click");
  document.getElementById("answer_4").parentNode.classList.remove("no-click");
}
