// europe section const
const europe = document.querySelector(".europe");
const spain = document.querySelector(".spain");
const portugal = document.querySelector(".portugal");

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
const table1 = document.querySelector(".t1");
const table2 = document.querySelector(".t2");
const table3 = document.querySelector(".t3");
const table4 = document.querySelector(".t4");
const choose = document.querySelector(".top");
const title = document.querySelector(".title");
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

function clicked() {
  console.log("clicked");
  countries.style.animationName = "move-countries";
  countries.style.animationDuration = "2s";
  countries.style.animationFillMode = "forwards";
  countries.style.animationDelay = "1s";
  main.style.animationName = "move-main";
  main.style.animationDuration = "2s";
  main.style.animationFillMode = "forwards";
  choose.style.animationName = "chooseAnim";
  choose.style.animationDuration = "3s";
  choose.style.animationFillMode = "forwards";
  boxContinentEurope.style.animation = "none";
  boxContinentEurope.style.boxShadow = "unset";
  boxContinentOceania.style.animation = "none";
  boxContinentOceania.style.boxShadow = "unset";
  boxContinentSouthAmerica.style.animation = "none";
  boxContinentSouthAmerica.style.boxShadow = "unset";
  boxContinentSouthAsia.style.animation = "none";
  boxContinentSouthAsia.style.boxShadow = "unset";
}

btnReady.onclick = function () {
  clicked();
};

europe.addEventListener("mouseover", function () {});

europe.addEventListener("mouseout", function () {
  if (!clickEurope) {
  }
});

europe.addEventListener("click", function () {
  clicked();
  containerBottomEurope.style.animationName = "country-develop";
  containerBottomEurope.style.animationDuration = "2s";
  containerBottomEurope.style.animationFillMode = "forwards";
  boxContinentEurope.style.animationName = "width-box-continent";
  boxContinentEurope.style.animationDuration = "4s";
  boxContinentEurope.style.animationFillMode = "forwards";
  spain.style.animationName = "spainBg";
  spain.style.animationDuration = "0.1s";
  spain.style.animationFillMode = "forwards";
  portugal.style.animationName = "portugalBg";
  portugal.style.animationDuration = "0.1s";
  portugal.style.animationFillMode = "forwards";
  table1.style.display = "flex";
  table1.style.animationName = "add-table";
  table1.style.animationDuration = "2s";
  table1.style.animationFillMode = "forwards";
});

oceania.addEventListener("mouseover", function () {});

oceania.addEventListener("mouseout", function () {
  if (!clickOceania) {
  }
});

oceania.addEventListener("click", function () {
  clicked();
  containerBottomOceania.style.animationName = "country-develop";
  containerBottomOceania.style.animationDuration = "2s";
  containerBottomOceania.style.animationFillMode = "forwards";
  boxContinentOceania.style.animationName = "width-box-continent";
  boxContinentOceania.style.animationDuration = "4s";
  boxContinentOceania.style.animationFillMode = "forwards";
  australia.style.animationName = "australiaBg";
  australia.style.animationDuration = "0.1s";
  australia.style.animationFillMode = "forwards";
  newCaledonia.style.animationName = "newCaledoniaBg";
  newCaledonia.style.animationDuration = "0.1s";
  newCaledonia.style.animationFillMode = "forwards";
  table2.style.display = "flex";
  table2.style.animationName = "add-table";
  table2.style.animationDuration = "2s";
  table2.style.animationFillMode = "forwards";
});

southAmerica.addEventListener("mouseover", function () {});

southAmerica.addEventListener("mouseout", function () {
  if (!clickSouthAmerica) {
  }
});

southAmerica.addEventListener("click", function () {
  clicked();
  containerBottomSouthAmerica.style.animationName = "country-develop";
  containerBottomSouthAmerica.style.animationDuration = "2s";
  containerBottomSouthAmerica.style.animationFillMode = "forwards";
  boxContinentSouthAmerica.style.animationName = "width-box-continent";
  boxContinentSouthAmerica.style.animationDuration = "4s";
  boxContinentSouthAmerica.style.animationFillMode = "forwards";
  chile.style.animationName = "chileBg";
  chile.style.animationDuration = "0.1s";
  chile.style.animationFillMode = "forwards";
  costaRica.style.animationName = "costaRicaBg";
  costaRica.style.animationDuration = "0.1s";
  costaRica.style.animationFillMode = "forwards";
});

asia.addEventListener("mouseover", function () {});

asia.addEventListener("mouseout", function () {
  if (!clickAsia) {
  }
});

asia.addEventListener("click", function () {
  clicked();
  containerBottomAsia.style.animationName = "country-develop";
  containerBottomAsia.style.animationDuration = "2s";
  containerBottomAsia.style.animationFillMode = "forwards";
  boxContinentSouthAsia.style.animationName = "width-box-continent";
  boxContinentSouthAsia.style.animationDuration = "4s";
  boxContinentSouthAsia.style.animationFillMode = "forwards";
  thailand.style.animationName = "thailandBg";
  thailand.style.animationDuration = "0.1s";
  thailand.style.animationFillMode = "forwards";
  uae.style.animationName = "uaeBg";
  uae.style.animationDuration = "0.1s";
  uae.style.animationFillMode = "forwards";
});
