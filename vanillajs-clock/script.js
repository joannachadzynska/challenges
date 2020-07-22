console.log("hello clock");
const secondHand = document.querySelector(".hand__second");
const minuteHand = document.querySelector(".hand__min");
const hourHand = document.querySelector(".hand__hour");
const secondsCircle = document.querySelector(".clock");

console.log(secondsCircle);

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
	minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
