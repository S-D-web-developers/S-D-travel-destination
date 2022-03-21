const ovni = document.querySelector("#ovni");
// europe section const
const europe = document.querySelector(".europe");
const spain = document.querySelector(".spain");
const greece = document.querySelector(".greece");

// oceania section const
const oceania = document.querySelector(".oceania");
const australia = document.querySelector(".australia");
const newCaledonia = document.querySelector(".new-caledonia");

// South America section const
const southAmerica = document.querySelector(".south-america");
const chile = document.querySelector(".chile");
const costaRica = document.querySelector(".costa-rica");

// Asia section const
const asia = document.querySelector(".asia");
const thailand = document.querySelector(".thailand");
const uae = document.querySelector(".united-arab-emirates");

const main = document.querySelector("main");
const continent = document.querySelector(".continent");
const rocket = document.querySelector("#rocket");

let clickEurope = false;
let clickOceania = false;
let clickSouthAmerica = false;
let clickAsia = false;
let ovniPosition = "50%";

europe.addEventListener("mouseover", function () {
  oceania.style.animation = "opacityLow 1s forwards";
  southAmerica.style.animation = "opacityLow 1s forwards";
  asia.style.animation = "opacityLow 1s forwards";
  europe.style.animation = "opacityHigh 1s forwards";
  ovni.style.right = `${ovniPosition}`;
  ovni.style.animationName = "goEurope";
  ovni.style.animationDuration = "3s";
  ovni.style.animationFillMode = "forwards";
  ovniPosition = "85%";
});

europe.addEventListener("mouseout", function () {
  if (!clickEurope) {
  }
});

europe.addEventListener("click", function () {
  clickEurope = true;
  document.getElementById("europe").style.backgroundImage = "none";
  europe.style.animationName = "country-develop";
  europe.style.animationDuration = "4s";
  europe.style.animationFillMode = "forwards";
  spain.querySelector("p").style.animationName = "country-position";
  spain.querySelector("p").style.animationDuration = "4s";
  spain.querySelector("p").style.animationFillMode = "forwards";
  spain.querySelector("p").style.animationName = "country-rotation";
  spain.querySelector("p").style.animationDuration = "4s";
  spain.querySelector("p").style.animationFillMode = "forwards";
  greece.querySelector("p").style.animationName = "country-position";
  greece.querySelector("p").style.animationDuration = "4s";
  greece.querySelector("p").style.animationFillMode = "forwards";
  greece.querySelector("p").style.animationName = "country-rotation";
  greece.querySelector("p").style.animationDuration = "4s";
  greece.querySelector("p").style.animationFillMode = "forwards";
});

oceania.addEventListener("mouseover", function () {
  europe.style.animation = "opacityLow 1s forwards";
  southAmerica.style.animation = "opacityLow 1s forwards";
  asia.style.animation = "opacityLow 1s forwards";
  oceania.style.animation = "opacityHigh 1s forwards";
  ovni.style.right = `${ovniPosition}`;
  ovni.style.animationName = "goOceania";
  ovni.style.animationDuration = "3s";
  ovni.style.animationFillMode = "forwards";
  ovniPosition = "60%";
});

oceania.addEventListener("mouseout", function () {
  if (!clickOceania) {
  }
});

oceania.addEventListener("click", function () {
  clickOceania = true;
  document.getElementById("oceania").style.backgroundImage = "none";
  oceania.style.animationName = "country-develop";
  oceania.style.animationDuration = "4s";
  oceania.style.animationFillMode = "forwards";
  australia.style.animationName = "country-position";
  australia.style.animationDuration = "4s";
  australia.style.animationFillMode = "forwards";
  australia.querySelector("p").style.animationName = "country-rotation";
  australia.querySelector("p").style.animationDuration = "4s";
  australia.querySelector("p").style.animationFillMode = "forwards";
  newCaledonia.style.animationName = "country-position";
  newCaledonia.style.animationDuration = "4s";
  newCaledonia.style.animationFillMode = "forwards";
  newCaledonia.querySelector("p").style.animationName = "country-rotation";
  newCaledonia.querySelector("p").style.animationDuration = "4s";
  newCaledonia.querySelector("p").style.animationFillMode = "forwards";
});

southAmerica.addEventListener("mouseover", function () {
  oceania.style.animation = "opacityLow 1s forwards";
  europe.style.animation = "opacityLow 1s forwards";
  asia.style.animation = "opacityLow 1s forwards";
  southAmerica.style.animation = "opacityHigh 1s forwards";
  ovni.style.right = `${ovniPosition}`;
  ovni.style.animationName = "goSouthAmerica";
  ovni.style.animationDuration = "3s";
  ovni.style.animationFillMode = "forwards";
  ovniPosition = "40%";
});

southAmerica.addEventListener("mouseout", function () {
  if (!clickSouthAmerica) {
  }
});

southAmerica.addEventListener("click", function () {
  clickSouthAmerica = true;
  document.getElementById("southAmerica").style.backgroundImage = "none";
  southAmerica.style.animationName = "country-develop";
  southAmerica.style.animationDuration = "4s";
  southAmerica.style.animationFillMode = "forwards";
  chile.style.animationName = "country-position";
  chile.style.animationDuration = "4s";
  chile.style.animationFillMode = "forwards";
  chile.querySelector("p").style.animationName = "country-rotation";
  chile.querySelector("p").style.animationDuration = "4s";
  chile.querySelector("p").style.animationFillMode = "forwards";
  costaRica.style.animationName = "country-position";
  costaRica.style.animationDuration = "4s";
  costaRica.style.animationFillMode = "forwards";
  costaRica.querySelector("p").style.animationName = "country-rotation";
  costaRica.querySelector("p").style.animationDuration = "4s";
  costaRica.querySelector("p").style.animationFillMode = "forwards";
});

asia.addEventListener("mouseover", function () {
  oceania.style.animation = "opacityLow 1s forwards";
  europe.style.animation = "opacityLow 1s forwards";
  southAmerica.style.animation = "opacityLow 1s forwards";
  asia.style.animation = "opacityHigh 1s forwards";
  ovni.style.right = `${ovniPosition}`;
  ovni.style.animationName = "goAsia";
  ovni.style.animationDuration = "3s";
  ovni.style.animationFillMode = "forwards";
  ovniPosition = "15%";
});

asia.addEventListener("mouseout", function () {
  if (!clickAsia) {
  }
});

asia.addEventListener("click", function () {
  clickAsia = true;
  document.getElementById("asia").style.backgroundImage = "none";
  asia.style.animationName = "country-develop";
  asia.style.animationDuration = "4s";
  asia.style.animationFillMode = "forwards";
  thailand.style.animationName = "country-position";
  thailand.style.animationDuration = "4s";
  thailand.style.animationFillMode = "forwards";
  thailand.querySelector("p").style.animationName = "country-rotation";
  thailand.querySelector("p").style.animationDuration = "4s";
  thailand.querySelector("p").style.animationFillMode = "forwards";
  uae.style.animationName = "country-position";
  uae.style.animationDuration = "4s";
  uae.style.animationFillMode = "forwards";
  uae.querySelector("p").style.animationName = "country-rotation";
  uae.querySelector("p").style.animationDuration = "4s";
  uae.querySelector("p").style.animationFillMode = "forwards";
});
