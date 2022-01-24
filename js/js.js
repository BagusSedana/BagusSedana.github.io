const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}

var slideIndex1 = 0;
showSlides1();
function showSlides1() {
  var a;
  var slides1 = document.getElementsByClassName("mySlides-1");
  for (a = 0; a < slides1.length; a++) {
    slides1[a].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {
    slideIndex1 = 1;
  }
  slides1[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

var slideIndex2 = 0;
showSlides2();
function showSlides2() {
  var b;
  var slides2 = document.getElementsByClassName("mySlides-2");
  for (b = 0; b < slides2.length; b++) {
    slides2[b].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}
