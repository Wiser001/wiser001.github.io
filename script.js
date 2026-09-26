const switches = document.querySelectorAll(".switch");
const forms = document.querySelectorAll(".auth-form");
const toggleAuth = document.getElementById("toggleAuth");

function setActiveForm(target) {
  switches.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === target);
  });

  forms.forEach((form) => {
    form.classList.toggle("active", form.id === `${target}Form`);
  });
}

switches.forEach((btn) => {
  btn.addEventListener("click", () => setActiveForm(btn.dataset.target));
});

toggleAuth.addEventListener("click", () => {
  const currentForm = document.querySelector(".auth-form.active").id;
  const next = currentForm === "loginForm" ? "signup" : "login";
  setActiveForm(next);
  document.getElementById("auth").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful. Welcome to KHADMEEN WISER.");
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Account created successfully. You can now log in.");
});