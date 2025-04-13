
document.getElementById("login-btn").addEventListener("click", () => {
  document.getElementById("login-modal").classList.remove("hidden");
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert("Login simulado com: " + email);
  document.getElementById("login-modal").classList.add("hidden");
}
