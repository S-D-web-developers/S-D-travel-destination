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
const btnOpenInfo = document.querySelector(".help")
const btnCloseInfo = document.querySelector('.closeBox')
const dots = document.querySelector('.dots')
const dot = document.getElementById('dot')
const back = document.querySelector('.back')
const infoBox = document.querySelector(".infoBox")
const tableSpain = document.querySelector(".tSpain");
const tablePortugal = document.querySelector(".tPortugal");
const tableAustralia = document.querySelector(".tAustralia");
const tableNewCaledonia = document.querySelector(".tNewCaledonia");
const tableChile = document.querySelector(".tChile");
const tableCostaRica = document.querySelector(".tCostaRica");
const tableThailand = document.querySelector(".tThailand");
const tableUae = document.querySelector(".tUae");
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
const boxContinentAsia = document.querySelector("#continent-asia");

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
  boxContinentAsia.style.animation = "none";
  boxContinentAsia.style.boxShadow = "unset";
  document.querySelector("body").style.animationName = "bgChange";
  document.querySelector("body").style.animationDuration = "5s";
  document.querySelector("body").style.animationFillMode = "forwards";
  back.classList.display = 'flex';
}

btnReady.onclick = function () {
  clicked();
};


back.addEventListener("click", function () {

  location.reload();
});

europe.addEventListener("click", function () {
  if(!clickEurope) {
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
  tableSpain.style.display = "flex";
  tableSpain.style.animationName = "add-table";
  tableSpain.style.animationDuration = "2s";
  tableSpain.style.animationFillMode = "forwards";
  tablePortugal.style.display = "flex";
  tablePortugal.style.animationName = "add-table";
  tablePortugal.style.animationDuration = "2s";
  tablePortugal.style.animationFillMode = "forwards";
  clickEurope=true;
}
else {
  containerBottomEurope.style.animationName = "none";
  spain.style.animationName = "none";
  portugal.style.animationName = "none";
  tableSpain.style.display = "none";
  tableSpain.style.animationName = "none";
  tablePortugal.style.display = "none";
  tablePortugal.style.animationName = "none";
  clickEurope=false;
}
});



oceania.addEventListener("click", function () {
  if(!clickOceania) {
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
  tableAustralia.style.display = "flex";
  tableAustralia.style.animationName = "add-table";
  tableAustralia.style.animationDuration = "2s";
  tableAustralia.style.animationFillMode = "forwards";
  tableNewCaledonia.style.display = "flex";
  tableNewCaledonia.style.animationName = "add-table";
  tableNewCaledonia.style.animationDuration = "2s";
  tableNewCaledonia.style.animationFillMode = "forwards";
  clickOceania=true;
}
else {
  containerBottomOceania.style.animationName = "none";
  australia.style.animationName = "none";
  newCaledonia.style.animationName = "none";
  tableAustralia.style.display = "none";
  tableAustralia.style.animationName = "none";
  tableNewCaledonia.style.display = "none";
  tableNewCaledonia.style.animationName = "none";
  clickOceania=false;
}
});



southAmerica.addEventListener("click", function () {
  if(!clickSouthAmerica) {
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
  tableChile.style.display = "flex";
  tableChile.style.animationName = "add-table";
  tableChile.style.animationDuration = "2s";
  tableChile.style.animationFillMode = "forwards";
  tableCostaRica.style.display = "flex";
  tableCostaRica.style.animationName = "add-table";
  tableCostaRica.style.animationDuration = "2s";
  tableCostaRica.style.animationFillMode = "forwards";
  clickSouthAmerica=true;
}
else {
  containerBottomSouthAmerica.style.animationName = "none";
  chile.style.animationName = "none";
  costaRica.style.animationName = "none";
  tableChile.style.display = "none";
  tableChile.style.animationName = "none";
  tableCostaRica.style.display = "none";
  tableCostaRica.style.animationName = "none";
  clickSouthAmerica=false;
}
});



asia.addEventListener("click", function () {
  if(!clickAsia) {
  clicked();
  containerBottomAsia.style.animationName = "country-develop";
  containerBottomAsia.style.animationDuration = "2s";
  containerBottomAsia.style.animationFillMode = "forwards";
  boxContinentAsia.style.animationName = "width-box-continent";
  boxContinentAsia.style.animationDuration = "4s";
  boxContinentAsia.style.animationFillMode = "forwards";
  thailand.style.animationName = "thailandBg";
  thailand.style.animationDuration = "0.1s";
  thailand.style.animationFillMode = "forwards";
  uae.style.animationName = "uaeBg";
  uae.style.animationDuration = "0.1s";
  uae.style.animationFillMode = "forwards";
  tableThailand.style.display = "flex";
  tableThailand.style.animationName = "add-table";
  tableThailand.style.animationDuration = "2s";
  tableThailand.style.animationFillMode = "forwards";
  tableUae.style.display = "flex";
  tableUae.style.animationName = "add-table";
  tableUae.style.animationDuration = "2s";
  tableUae.style.animationFillMode = "forwards";
  clickAsia=true;
}
else {
  containerBottomAsia.style.animationName = "none";
  thailand.style.animationName = "none";
  uae.style.animationName = "none";
  tableThailand.style.display = "none";
  tableThailand.style.animationName = "none";
  tableUae.style.display = "none";
  tableUae.style.animationName = "none";
  clickOceania=false;
}
});

btnOpenInfo.addEventListener("click", function () {
  infoBox.classList.remove("hidden");
  infoBox.classList.add("modal");
  boxContinentEurope.classList.add("overlay")
  boxContinentOceania.classList.add("overlay")
boxContinentSouthAmerica.classList.add("overlay")
  boxContinentAsia.classList.add("overlay")
});

btnCloseInfo.addEventListener("click", function () {
  infoBox.classList.remove("modal");
  infoBox.classList.add("hidden");
  btnOpenInfo.style.animation = "none";
  boxContinentEurope.classList.remove("overlay")
  boxContinentOceania.classList.remove("overlay")
boxContinentSouthAmerica.classList.remove("overlay")
  boxContinentAsia.classList.remove("overlay")
});

