// Loader
let loader = document.querySelector(".loader-parent");

loader.classList.add("hidding");
setTimeout(() => {
  loader.classList.remove("hidding");
  loader.classList.add("hide");
}, 3000);

// Navbar

let nav = document.querySelector("nav");
let btn_nav_toggle = document.querySelectorAll(".btn-nav-toggle");
let nav_item = document.querySelectorAll(".nav-item");
let close_btn = document.querySelectorAll(".close-btn");

btn_nav_toggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    nav_item.forEach((item) => {
      item.classList.toggle("hide");
    });
  });
});
close_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.classList.add("hide");
  });
});

// Shrink

document.addEventListener("scroll", () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// Confitte

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 4000);
};

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 15000);
};

start();
stop();

// Scroll Progress Bar

window.addEventListener("scroll", (event) => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});
