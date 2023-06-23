// localStorage.getItem("lastName");
// localStorage.getItem("firstName");
// localStorage.getItem("avatar");

// get user

const username = (document.querySelector(".username").textContent =
  localStorage.getItem("firstName") + "'s");

// LogOut Func

const logout_btn = document.querySelectorAll(".logout-btn");

logout_btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    localStorage.clear();
    document.location.replace("../index.html");
  });
});

// Profil settings

const profil_pic = document.querySelector(".profil-pic");
const first_name = document.querySelector(".first_name");
const last_name = document.querySelector(".last_name");
const logined = document.querySelector(".logined");
profil_pic.src = localStorage.getItem("avatar");

first_name.textContent = `First Name: ${localStorage.getItem("firstName")}`;
last_name.textContent = `Last Name: ${localStorage.getItem("lastName")}`;
logined.textContent = `Logined at: ${localStorage.getItem("date")}`;
