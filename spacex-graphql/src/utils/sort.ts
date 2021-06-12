import { Launch } from 'types/launchTypes';

const sortByDate = (arr: Launch[]) => {
	const copy: Launch[] = JSON.parse(JSON.stringify(arr));

	copy.sort((a, b) => {
		const aDate = Number(new Date(a.date_local));
		const bDate = Number(new Date(b.date_local));
		return bDate - aDate;
	});

	return copy;
};

export { sortByDate };
