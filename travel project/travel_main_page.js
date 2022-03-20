const background = document.querySelector(".background");
const europe = document.querySelector(".europe");
const oceania = document.querySelector(".oceania");
const southAmerica = document.querySelector(".south-america");
const asia = document.querySelector(".asia");

const main = document.querySelector("main");
const continent = document.querySelector(".continent");
const rocket = document.querySelector("#rocket");

rocket.style.right = "0";

europe.addEventListener("mouseover", function () {
  background.style.backgroundImage = 'url("europe.jpg")';
});

europe.addEventListener("mouseout", function () {
  background.style.backgroundImage = 'url("earth.jpg")';
});

oceania.addEventListener("mouseover", function () {
  background.style.backgroundImage = 'url("oceania.jpg")';
});

oceania.addEventListener("mouseout", function () {
  background.style.backgroundImage = 'url("earth.jpg")';
});

southAmerica.addEventListener("mouseover", function () {
  background.style.backgroundImage = 'url("southAmerica.jpg")';
});

southAmerica.addEventListener("mouseout", function () {
  background.style.backgroundImage = 'url("earth.jpg")';
});

asia.addEventListener("mouseover", function () {
  background.style.backgroundImage = 'url("asia.jpg")';
});

asia.addEventListener("mouseout", function () {
  background.style.backgroundImage = 'url("earth.jpg")';
});
