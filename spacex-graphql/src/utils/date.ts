export const getNumberWithOrdinal = (n: number) => {
	var s = ['th', 'st', 'nd', 'rd'],
		v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const setDateToString = (date: Date) => {
	let options = { month: 'long', day: 'numeric', year: 'numeric' };
	const splitDate = date.toLocaleDateString('en-US').split(' ');
	const month = splitDate[0];
	const day = parseInt(splitDate[1]);

	const dayWithOrdinal = getNumberWithOrdinal(day);
	const year = splitDate[2];

	return `${month} ${dayWithOrdinal} ${year}`;
};
