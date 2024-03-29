let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


let preloader = document.getElementById('preloader');
window.addEventListener('load', function () {
  preloader.style.display = 'none';
})

const text1_options = [
  "Inauguration Event",
  

];
const text2_options = [
  "YCCE's GFG Student Chapter."
];

const text3_options = [
    "7th Nov 2023"
];
const color_options = ["#f5f1ed"];
const image_options = [
  "/static/images/Events/inaug.jpeg",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionText3 = document.getElementById("current-option-text3");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionText3.innerText = text3_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  currentOptionText3.dataset.nextText = text3_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    currentOptionText3.innerText = text3_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  currentOptionText3.dataset.previousText = text3_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    currentOptionText3.innerText = text3_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};


const closeButton = document.getElementById("close-modal");
const mobileCloseButton = document.getElementById("mobile-close-modal");
const modal = document.querySelector(".modal");
const mobileModal = document.querySelector(".mobile-modal");
const overLay = document.querySelector(".over-lay");

const Open = () => {
  modal.classList.add("active-modal");
  overLay.classList.add("open");
  mobileModal.classList.add("mobile-modal-active");
}

const open = setTimeout(
  Open, 2000)

closeButton.addEventListener("click", () => {
  modal.classList.remove("active-modal");
  overLay.classList.remove("open");
});

mobileCloseButton.addEventListener("click", () => {
  mobileModal.classList.remove("mobile-modal-active");
});

overLay.addEventListener("click", () => {
  modal.classList.remove("active-modal");
  overLay.classList.remove("open");
})


