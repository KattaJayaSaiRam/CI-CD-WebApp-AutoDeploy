const quizzes = [
  { id: 1, title: "HTML Basics" },
  { id: 2, title: "JavaScript Fundamentals" },
  { id: 3, title: "CSS Styling" }
];

const attempts = JSON.parse(localStorage.getItem("attempts") || "{}");
const quizList = document.getElementById("quiz-list");

function renderDashboard() {
  quizList.innerHTML = "";

  quizzes.forEach(q => {
    const li = document.createElement("li");
    const attempt = attempts[q.id];
    const attempted = attempt ? "Attempted (Score: " + attempt.score + ")" : "Not Attempted";

    li.innerHTML = `
      <strong>${q.title}</strong> - ${attempted}
      ${!attempt ? `<button onclick="startQuiz(${q.id})">Take Quiz</button>` : `
        <button onclick="resetQuiz(${q.id})">Reset Attempt</button>
      `}
    `;
    quizList.appendChild(li);
  });
}

function startQuiz(id) {
  localStorage.setItem("currentQuiz", id);
  window.location.href = "quiz.html";
}

function resetQuiz(id) {
  delete attempts[id];
  localStorage.setItem("attempts", JSON.stringify(attempts));
  renderDashboard();
}

renderDashboard();
