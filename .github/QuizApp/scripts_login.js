document.getElementById("login-form").onsubmit = function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if ((role === "student" && username === "student" && password === "1234") ||
      (role === "teacher" && username === "teacher" && password === "admin")) {
    localStorage.setItem("user", JSON.stringify({ username, role }));
    window.location.href = role === "student" ? "student.html" : "teacher.html";
  } else {
    document.getElementById("error-msg").textContent = "Invalid credentials or role.";
  }
};
