// analog clock
const secondHand = document.querySelector(".hand__second");
const minuteHand = document.querySelector(".hand__min");
const hourHand = document.querySelector(".hand__hour");

// digital clock
const hour = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

const analogClock = document.querySelector(".clock");
const digitalClock = document.querySelector(".digital-clock");

const toggleModeBtn = document.getElementById("js-toggle-mode");

function setDate() {
	const now = new Date();
	let seconds = now.getSeconds() * 6;
	let mins = now.getMinutes() * 6;
	let hours = now.getHours() * 30;

	const hoursDegrees = hours + mins / 12;
	secondHand.style.transform = `rotate(${seconds}deg)`;
	minuteHand.style.transform = `rotate(${mins}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setDigitalClock() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let am = "AM";

	if (h > 12) {
		h = h - 12;
		let am = "PM";
	}

	// add zero before single digit numbers
	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;

	hour.innerHTML = `${h}:`;
	minutes.innerHTML = `${m}:`;
	seconds.innerHTML = `${s}&nbsp;`;
	ampm.innerHTML = `${am}`;
}

setInterval(setDate, 1000);
setInterval(setDigitalClock, 1000);
setDate();

function toggleMode(e) {
	console.log(e.target);
}

toggleModeBtn.addEventListener("click", toggleMode);
