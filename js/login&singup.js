let open_modal_btn = document.querySelectorAll(".open-modal-btn");
let close_modal_btn = document.querySelector(".close-modal-btn");
let modal = document.querySelector(".modal");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let loginBtn = document.querySelector(".login-btn");
let profil_picture = document.querySelector(".img-file");
let login_case = document.querySelectorAll(".login-case");

function openModal() {
  modal.classList.add("openModal");
}

function closeModal() {
  modal.classList.remove("openModal");
}

open_modal_btn.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

close_modal_btn.addEventListener("click", closeModal);

loginBtn.addEventListener("click", function () {
  if (firstName.value.length <= 2 || lastName.value.length <= 2) {
    alert("Please fill the fields ❌");
  } else {
    const profil_picture01 = profil_picture.files[0];
    const imageUrl = URL.createObjectURL(profil_picture01);
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("avatar", imageUrl);
    localStorage.setItem("isLogined", true);
    closeModal();
    alert("You are logged in ✅");
  }
});

if (localStorage.getItem("isLogined")) {
  login_case.forEach((el) => {
    el.innerHTML = `
    <img src="${localStorage.getItem("avatar")}" width="50px" height="50px" alt="avatar">
    <h3>${localStorage.getItem("firstName")}</h3>`;
  });
}
