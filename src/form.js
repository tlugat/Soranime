const loginBtn = document.querySelector("#loginBtn");
const registerBtn = document.querySelector("#registerBtn");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const launcher = document.querySelector(".form-box");
const btnSelected = document.querySelector("#color-btn");

registerBtn.addEventListener("click", function() {
  login.style.display = "none";
  launcher.style.height = "38rem";
  register.style.transform = "translateY(-25px)";
  register.style.display = "flex";
  btnSelected.style.transform = "translateX(130px)";
});

loginBtn.addEventListener("click", function() {
  register.style.display = "none";
  login.style.display = "flex";
  launcher.style.height = "30rem";
  btnSelected.style.transform = "translateX(0px)";
});
