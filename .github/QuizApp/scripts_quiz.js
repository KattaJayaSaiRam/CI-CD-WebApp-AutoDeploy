const quizData = {
  1: {
    title: "HTML Basics",
    questions: [
      { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "Home Tool Markup Language"], ans: "Hyper Text Markup Language" },
      { q: "Which tag creates a hyperlink?", opts: ["<a>", "<link>"], ans: "<a>" }
    ]
  },
  2: {
    title: "JavaScript Fundamentals",
    questions: [
      { q: "Which keyword declares a variable?", opts: ["var", "int"], ans: "var" },
      { q: "Which method logs to console?", opts: ["console.log()", "print()"], ans: "console.log()" }
    ]
  },
  3: {
    title: "CSS Styling",
    questions: [
      { q: "Which property sets text color?", opts: ["color", "font-color"], ans: "color" },
      { q: "Which unit is relative?", opts: ["em", "px"], ans: "em" }
    ]
  }
};

const quizId = localStorage.getItem("currentQuiz");
const quiz = quizData[quizId];
document.getElementById("quiz-title").textContent = quiz.title;

let current = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const warningEl = document.getElementById("warning");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quiz.questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  warningEl.textContent = "";
  selected = null;

  q.opts.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => {
      document.querySelectorAll("#options li").forEach(el => el.classList.remove("selected"));
      li.classList.add("selected");
      selected = opt;
    };
    optionsEl.appendChild(li);
  });
}

nextBtn.onclick = () => {
  if (!selected) {
    warningEl.textContent = "Please select an option.";
    return;
  }
  if (selected === quiz.questions[current].ans) score++;
  current++;
  if (current < quiz.questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    scoreEl.textContent = `${score} / ${quiz.questions.length}`;

    const attempts = JSON.parse(localStorage.getItem("attempts") || "{}");
    attempts[quizId] = { score };
    localStorage.setItem("attempts", JSON.stringify(attempts));
  }
};

loadQuestion();
