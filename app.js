const container = document.querySelector(".calender");
const age = document.querySelector(".age");
const total = document.querySelector(".total");
const slider = document.querySelector("input");
const maxYears = 90;

function pupulate() {
	if (!container) return;

	for (i = 0; i < maxYears * 52; i++) {
		let newBall = document.createElement("div");
		newBall.classList.add("ball");
		container.appendChild(newBall);
	}
}

function color(num) {
	let allBalls = document.querySelectorAll(".ball");
	if (allBalls) {
		for (i = 0; i < num; i++) {
			allBalls[i].classList.add("checked");
		}
	}
}

function decolor() {
	let allBalls = document.querySelectorAll(".ball");
	if (allBalls) {
		for (c = 0; c < allBalls.length; c++) {
			allBalls[c].classList.remove("checked");
		}
	}
}

function getSliderVal() {
	if (slider && age) {
		let currentAge = parseInt(slider.value);
		decolor();
		color(currentAge * 52);
		age.innerHTML = `${slider.value}/<h6 >${maxYears}</h6> yrs `;
		total.textContent = `total weeks:${slider.value * 52}\/${maxYears * 52} `;
	}
}

function init() {
	if (slider) {
		slider.value = getYearsSince2003();
		getSliderVal();
	}
}

pupulate();
init();

//to get my age
function getYearsSince2003() {
	const startDate = new Date(2003, 3, 1);
	const currentDate = new Date();
	const timeDifference = currentDate - startDate;
	const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
	const yearsDifference = timeDifference / millisecondsInYear;
	return Math.floor(yearsDifference);
}
