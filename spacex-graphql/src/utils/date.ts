export const getNumberWithOrdinal = (n: number) => {
	var s = ['th', 'st', 'nd', 'rd'],
		v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const setDateToString = (date: Date) => {
	let options = { month: 'long', day: 'numeric', year: 'numeric' };
	const splitDate = date.toLocaleDateString('en-US', options).split(' ');
	const month = splitDate[0];
	const day = parseInt(splitDate[1]);

	const dayWithOrdinal = getNumberWithOrdinal(day);
	const year = splitDate[2];

	return `${month} ${dayWithOrdinal} ${year}`;
};

export type TimeLeft = {
	difference: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

export const calculateTimeLeft = (time: Date) => {
	let deadline = new Date(time).getTime();
	let now = new Date().getTime();
	let difference = deadline - now;
	let timeleft: TimeLeft = {} as TimeLeft;

	if (difference > 0) {
		timeleft = {
			difference: difference,
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	} else {
		timeleft = {
			difference: 0,
			days: Number('00'),
			hours: Number('00'),
			minutes: Number('00'),
			seconds: Number('00'),
		};
	}

	return timeleft;
};
