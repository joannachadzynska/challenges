import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { MissionLaunchDate } from './styles';

type LaunchDateProps = Pick<LaunchViewModel, 'launchDateLocal'>;

const LaunchDate: React.SFC<LaunchDateProps> = ({ launchDateLocal }) => {
	const getNumberWithOrdinal = (n: number) => {
		var s = ['th', 'st', 'nd', 'rd'],
			v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	};

	const setDateToString = (date: Date) => {
		let options = { month: 'long', day: 'numeric', year: 'numeric' };
		const splitDate = launchDateLocal
			.toLocaleDateString('en-US', options)
			.split(' ');
		const month = splitDate[0];
		const day = parseInt(splitDate[1]);
		const dayWithOrdinal = getNumberWithOrdinal(day);
		const year = splitDate[2];

		return `${month} ${dayWithOrdinal} ${year}`;
	};

	return (
		<MissionLaunchDate>
			<time dateTime={launchDateLocal.toISOString()}>
				{setDateToString(launchDateLocal)}
			</time>
		</MissionLaunchDate>
	);
};

export default LaunchDate;
