const form = document.querySelector(".form");
const button = document.querySelector(".button");

const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");

const passwordError = document.querySelector(".password-error");

form.addEventListener("submit", (e) => {
  if (password.value != confirmPassword.value) {
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    passwordError.style.display = "inline-block";
    e.preventDefault();
  }
});
