let open_modal_btn = document.querySelectorAll(".open-modal-btn");
let close_modal_btn = document.querySelector(".close-modal-btn");
let modal = document.querySelector(".modal");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let loginBtn = document.querySelector(".login-btn");
let profil_picture = document.querySelector(".img-file");
let login_case = document.querySelectorAll(".login-case");
var imgCode;

const imgUpload = (e) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imgCode = reader.result;
  });
  reader.readAsDataURL(profil_picture.files[0]);
};

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
    let date = new Date().toJSON().slice(0, 10);
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("avatar", imgCode);
    localStorage.setItem("isLogined", true);
    localStorage.setItem("date", date);

    closeModal();
    alert("You are logged in ✅");
    document.location.reload();
  }
});

if (localStorage.getItem("isLogined")) {
  login_case.forEach((el) => {
    el.innerHTML = `
    <a class="login-case" href="../pages/settings.html">
    <img src="${localStorage.getItem(
      "avatar"
    )}" style="height: 50px; width: 50px; border-radius: 50%" alt="avatar">
    <h3>${localStorage.getItem("lastName").charAt(0)}. ${localStorage.getItem(
      "firstName"
    )}</h3>
    </a>
    `;
  });
}
