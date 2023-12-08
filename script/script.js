let questions = [
  {
    question: "Welches Land ist das flächenmäßig größte der Welt?",
    answer_1: "Russland",
    answer_2: "USA",
    answer_3: "China",
    answer_4: "Indien",
    right_answer: 1,
  },
  {
    question: "In welchem Ozean liegt die Inselgruppe Hawaii?",
    answer_1: "Atlantik",
    answer_2: "Indischer Ozean",
    answer_3: "Südlicher Ozean",
    answer_4: "Pazifischer Ozean",
    right_answer: 4,
  },
  {
    question: "Was ist die Hauptstadt von Australien?",
    answer_1: "Sydney",
    answer_2: "Melbourne",
    answer_3: "Canberra",
    answer_4: "Brisbane",
    right_answer: 3,
  },
  {
    question: "Welcher Fluss fließt durch Paris?",
    answer_1: "Themse",
    answer_2: "Donau",
    answer_3: "Seine",
    answer_4: "Rhein",
    right_answer: 3,
  },
  {
    question: "Welches Gebirge trennt Europa von Asien?",
    answer_1: "Alpen",
    answer_2: "Himalaya",
    answer_3: "Ural",
    answer_4: "Anden",
    right_answer: 3,
  },
];


let currentQuestion = 0;


function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}


function showQuestion() {

  if (currentQuestion >= questions.length) {
    document.getElementById("endScreen").classList.remove("d-none");
    document.getElementById("questionBody").classList.add("d-none");
  }
  else {
    let question = questions[currentQuestion];
    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("question-text").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}


function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
    
  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById("answer_" + question["right_answer"]).parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}


function nextQuestion(){
  currentQuestion++; // z.B. von 0 auf 1
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion(); // render nächste Frage
}


function resetAnswerButtons(){
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}
