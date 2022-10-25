"use strict";
const toggle = document.querySelector(".toggle i");
const header = document.querySelector("header");
const body = document.querySelector("body");
const boxContainer = document.querySelectorAll("div .box");
const socialH2 = document.querySelector(".h2");
const statsh1 = document.querySelectorAll("div.stats h1");
const secondConth2 = document.querySelector("#second-container h2");
const boxOverviewContainer = document.querySelectorAll(".boxOverview");
const boxOverviewh2 = document.querySelectorAll(".boxOverview h2");
// console.log(document.querySelector(".h2"));

toggle.addEventListener("click", () => {
  console.log("I'm being clicked");
  toggle.classList.toggle("fa-toggle-on");

  //   document.querySelector("div.toggle p").textContent = "Dark mode";

  //change background colors of the backgrounds
  header.classList.toggle("background-Color2");
  body.classList.toggle("background-Color");

  changeBoxColors(boxContainer);
  changeTextcolors(statsh1);

  socialH2.classList.toggle("socialColor");

  secondConth2.classList.toggle("overviewhdChanged");

  changeBoxColors(boxOverviewContainer);

  changeTextcolors(boxOverviewh2);
});

function changeBoxColors(box) {
  for (let i = 0; i < box.length; i++) {
    box[i].classList.toggle("changeBoxColors");
  }
}

function changeTextcolors(text) {
  for (let i = 0; i < text.length; i++) {
    text[i].classList.toggle("changeTextColors");
  }
}
