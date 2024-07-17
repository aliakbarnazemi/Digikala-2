let $CategoryLink = document.querySelector(".category-item");
let $Main = document.querySelector("main");
let $CategoryList = document.querySelector(".category-list");
let $SearchLink = document.querySelector(".box-search");
let $SearchList = document.querySelector(".main");
let $Header = document.querySelector(".head-bottom");
let $Header2 = document.querySelector(".flex-login-cart");
let $Header3 = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 65) {
    $Header.classList.add("d-none");
    $Header2.classList.add("mt-0");
    $Header3.classList.add("pb-1");

    $SearchLink.addEventListener("click", () => {
      $Main.style.display = "none";
      $SearchList.style.display = "none";
    });
  } if (window.scrollY <= 65) {
    $Header.classList.remove("d-none");
    $Header2.classList.remove("mt-0");
    $Header3.classList.remove("pb-1");

    $SearchLink.addEventListener("click", () => {
      $Main.style.display = "block";
      $SearchList.style.display = "flex";
    });
  }
});

$CategoryLink.addEventListener("mouseenter", () => {
  $Main.style.display = "block";
  $CategoryList.style.display = "block";
});

$Main.addEventListener("mouseenter", () => {
  $Main.style.display = "none";
  $CategoryList.style.display = "none";
  $SearchList.style.display = "none";
});