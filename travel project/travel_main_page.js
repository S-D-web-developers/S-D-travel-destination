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
const countries = document.querySelector(".countries");
const btnReady = document.querySelector(".btn");
const containerBottomEurope = document.querySelector("#europe");
const containerBottomOceania = document.querySelector("#oceania");
const containerBottomSouthAmerica = document.querySelector("#southAmerica");
const containerBottomAsia = document.querySelector("#asia");

const boxContinentEurope = document.querySelector("#continent-europe");
const boxContinentOceania = document.querySelector("#continent-oceania");
const boxContinentSouthAmerica = document.querySelector(
  "#continent-southAmerica"
);
const boxContinentSouthAsia = document.querySelector("#continent-asia");

let clickEurope = false;
let clickOceania = false;
let clickSouthAmerica = false;
let clickAsia = false;

btnReady.addEventListener("click", function () {
  countries.style.animationName = "move-countries";
  countries.style.animationDuration = "1s";
  countries.style.animationFillMode = "forwards";
  countries.style.animationDelay = "0.5s";
  main.style.animationName = "move-main";
  main.style.animationDuration = "3s";
  main.style.animationFillMode = "forwards";
});

europe.style.removeProperty("background");

europe.addEventListener("mouseover", function () {});

europe.addEventListener("mouseout", function () {
  if (!clickEurope) {
  }
});

europe.addEventListener("click", function () {
  clickEurope = true;
  containerBottomEurope.style.animationName = "country-develop";
  containerBottomEurope.style.animationDuration = "4s";
  containerBottomEurope.style.animationFillMode = "forwards";
  boxContinentEurope.style.animationName = "width-box-continent";
  boxContinentEurope.style.animationDuration = "4s";
  boxContinentEurope.style.animationFillMode = "forwards";
});

oceania.addEventListener("mouseover", function () {});

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
});

southAmerica.addEventListener("mouseover", function () {});

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
});

asia.addEventListener("mouseover", function () {});

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
});
