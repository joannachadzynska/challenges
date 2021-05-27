export const getNumberWithOrdinal = (n: number) => {
	var s = ['th', 'st', 'nd', 'rd'],
		v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const setDateToString = (date: Date) => {
	const splitDate = new Date(date)
		.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
		.split(' ');

	const month = splitDate[0];
	const day = parseInt(splitDate[1]);

	const dayWithOrdinal = getNumberWithOrdinal(day);
	const year = splitDate[2];

	return `${month} ${dayWithOrdinal} ${year}`;
};

export const convertUTCDateToLocalDate = (date: string) => {
	const oldDate = new Date(date);
	const newDate = new Date(oldDate.getTime() - oldDate.getTimezoneOffset());
	return newDate;
};
