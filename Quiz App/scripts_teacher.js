const quizzes = {
  1: "HTML Basics",
  2: "JavaScript Fundamentals",
  3: "CSS Styling"
};

const studentName = "student"; // Simulated single user
const attempts = JSON.parse(localStorage.getItem("attempts") || "{}");

const filterStudent = document.getElementById("filter-student");
const filterSubject = document.getElementById("filter-subject");
const reportBody = document.getElementById("report-body");

// Populate dropdowns
filterStudent.innerHTML += `<option value="${studentName}">${studentName}</option>`;
Object.values(quizzes).forEach(subject => {
  filterSubject.innerHTML += `<option value="${subject}">${subject}</option>`;
});

function renderTable() {
  reportBody.innerHTML = "";

  Object.keys(quizzes).forEach(id => {
    const subject = quizzes[id];
    const attempt = attempts[id];
    const attempted = attempt ? "Yes" : "No";
    const marks = attempt ? attempt.score : "nil";

    const rowData = {
      student: studentName,
      subject,
      attempted,
      marks: String(marks)
    };

    if (
      (filterStudent.value === "" || filterStudent.value === rowData.student) &&
      (filterSubject.value === "" || filterSubject.value === rowData.subject)
    ) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${rowData.student}</td>
        <td>${rowData.subject}</td>
        <td>${rowData.attempted}</td>
        <td>${rowData.marks}</td>
      `;
      reportBody.appendChild(row);
    }
  });
}

// Attach filter listeners
filterStudent.addEventListener("change", renderTable);
filterSubject.addEventListener("change", renderTable);

renderTable();
