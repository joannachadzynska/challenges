import React from 'react';
import { setDateToString } from 'utils/date';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { MissionLaunchDate } from './styles';

type LaunchDateProps = Pick<LaunchViewModel, 'launchDateLocal'>;

const LaunchDate: React.SFC<LaunchDateProps> = ({ launchDateLocal }) => {
	return (
		<MissionLaunchDate>
			<time dateTime={launchDateLocal.toISOString()}>
				{setDateToString(launchDateLocal)}
			</time>
		</MissionLaunchDate>
	);
};

export default LaunchDate;
