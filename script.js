const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Capital of France?",
    options: ["Rome", "London", "Paris", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  }
];

let currentQuestion = 0;
let score = 0;

window.onload = () => {
  const name = localStorage.getItem("username");
  if (document.getElementById("welcome")) {
    if (!name) {
      window.location.href = "index.html";
    }
    document.getElementById("welcome").innerText = `Welcome, ${name}!`;
    loadQuestion();
  }
};

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(option) {
  const correct = questions[currentQuestion].answer;
  if (option === correct) score++;
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}`;
    localStorage.removeItem("username");
  }
}
