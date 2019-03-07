window.addEventListener("scroll", topNav)
window.addEventListener("scroll", updateScrollProgress)


var submitbtn = document.getElementById("submit-btn");
submitbtn.addEventListener("click", updateMogelijkheden);
var randomNummer = 0;

var namen = ["Koen","Jelle","Roel","Peter","Martin","Derk","Homer","Karel","Babette"];
var scrolltracker = document.getElementById("scrolltracker");
var scrollbounding = scrolltracker.getBoundingClientRect();

/*//////////////////////reizen-rechts/////////////*/
function updateMogelijkheden () {
	updateMogelijkheden1();
	updateMogelijkheden2();
	updateMogelijkheden3();
}

	function updateMogelijkheden1 (){
	randomNummer = Math.floor(Math.random()*8);
	var uren = Math.floor(Math.random()*24);
	var minuten = Math.floor(Math.random()*50+10);
	document.getElementById("mogelijkheid1").innerHTML = namen[randomNummer];
	document.getElementById("uren1").innerHTML = uren;
	document.getElementById("minuten1").innerHTML = minuten;
	};
	
	function updateMogelijkheden2 () {
	randomNummer = Math.floor(Math.random()*8);
	var uren = Math.floor(Math.random()*24);
	var minuten = Math.floor(Math.random()*50+10);
	document.getElementById("mogelijkheid2").innerHTML = namen[randomNummer];
	document.getElementById("uren2").innerHTML = uren;
	document.getElementById("minuten2").innerHTML = minuten;
	};
	
	function updateMogelijkheden3() {
	randomNummer = Math.floor(Math.random()*8);
	var uren = Math.floor(Math.random()*24);
	var minuten = Math.floor(Math.random()*50+10);
	document.getElementById("mogelijkheid3").innerHTML = namen[randomNummer];
	document.getElementById("uren3").innerHTML = uren;
	document.getElementById("minuten3").innerHTML = minuten;
	};

function topNav () {
	 scrollbounding = scrolltracker.getBoundingClientRect();

	if(scrollbounding.top >= -20) {
		removeClassWhiteBg();
	} else {
		addClassWhiteBg();
	}
}


/*/////////////////////navbar white bg///////////////////*/
function addClassWhiteBg () {
  var element = document.querySelector(".navbar-container");
  element.classList.add("white-bg");
}

function removeClassWhiteBg () {
  var element = document.querySelector(".navbar-container");
  element.classList.remove("white-bg");
}

/*/////////////////////////commentaar/////////////////////*/

var artikelen = ["Indebuurt.nl","Inbreda", "Brabants Dagblad","Omroep Brabant","Trouw", "Algemeen Dagblad", "Eindhovens Dagblad","Brabant Centrum","Tilburgse Koerier","NOS","Nu.nl","Telegraaf"]
var commentaar = ["<q>Goede service, leuke chauffeurs!</q>","<q>Je chauffeur is je beste vriend</q>","<q>Braber is a company were you can strive for loads of opportunities. And the chauffeurs are great!</q>", "<q>Een unieke rit!</q>", "<q>The best startup of 2019!</q>","<q>Brabantse trendsetters</q>","<q>Beste startup van 2019</q>"]

var randomnr = 0;
function changearticle () {
    randomnr = Math.floor(Math.random()* artikelen.length);
    document.getElementById("artikelen1").innerHTML = artikelen[randomnr];
    randomnr = Math.floor(Math.random()* commentaar.length);
    document.getElementById("commentaar1").innerHTML = commentaar[randomnr];

    randomnr = Math.floor(Math.random()* artikelen.length);
    document.getElementById("artikelen2").innerHTML = artikelen[randomnr];
    randomnr = Math.floor(Math.random()* commentaar.length);
    document.getElementById("commentaar2").innerHTML = commentaar[randomnr];

    randomnr = Math.floor(Math.random()* artikelen.length);
    document.getElementById("artikelen3").innerHTML = artikelen[randomnr];
    randomnr = Math.floor(Math.random()* commentaar.length);
    document.getElementById("commentaar3").innerHTML = commentaar[randomnr];

    randomnr = Math.floor(Math.random()* artikelen.length);
    document.getElementById("artikelen4").innerHTML = artikelen[randomnr];
    randomnr = Math.floor(Math.random()* commentaar.length);
    document.getElementById("commentaar4").innerHTML = commentaar[randomnr];
}

setInterval(changearticle, 5000);


/*///////////////////scrollbar//////////////////////////*/
var documentHeight = document.body.clientHeight;

function checkScrollProgress() {
	scrollbounding = scrolltracker.getBoundingClientRect();
	return (scrollbounding.top*-1 / (documentHeight - screen.height)) *100;
}

function updateScrollProgress() {
	scrollProgress = checkScrollProgress();
	document.getElementById("scrollprogress").style.height = scrollProgress + "%";
}

var stadlinks = document.querySelector(".brand-txt");
stadlinks.addEventListener("click", alert)

function alert() {
	prompt("hoeveel koeien?")
}