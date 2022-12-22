"use strict";
const toggleContainer = document.querySelector(".border_container");
const toggle = document.querySelector(".toggle");
const bgName = document.querySelector(".toggleMain > p");
const header = document.querySelector("header");
const body = document.querySelector("body");
const boxContainer = document.querySelectorAll("div .box");
const socialH2 = document.querySelector(".h2");
const statsh1 = document.querySelectorAll("div.stats h1");
const secondConth2 = document.querySelector("#second-container h2");
const boxOverviewContainer = document.querySelectorAll(".boxOverview");
const boxOverviewh2 = document.querySelectorAll(".boxOverview h2");

(toggle, toggleContainer).addEventListener("click", () => {
  toggleContainer.classList.toggle("toggleContainer__active");
  toggle.classList.toggle("toggle__active");

  bgName.classList.toggle("changer");

  //change background colors of the backgrounds
  header.classList.toggle("background-Color2");
  body.classList.toggle("background-Color");

  changeBoxColors(boxContainer);
  changeTextColors(statsh1);

  socialH2.classList.toggle("socialColor");

  secondConth2.classList.toggle("overviewhdChanged");

  changeBoxColors(boxOverviewContainer);

  changeTextColors(boxOverviewh2);
});

const changeBoxColors = (boxes) => {
  boxes.forEach((box) => box.classList.toggle("changeBoxColors"));
};

const changeTextColors = (texts) => {
  texts.forEach((text) => text.classList.toggle("changeTextColors"));
};
