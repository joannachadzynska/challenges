import React from 'react';
import { LaunchPastViewModel } from '../../../models/LaunchPastViewModel';
import { RocketViewModel } from '../../../models/RocketViewModel';
import { MissionName } from '../../Missions';
import { LaunchDate } from '../../Launches';
import { RocketName, RocketCountry } from '../../Rockets';

type CardContentProps = Omit<LaunchPastViewModel, 'image' | 'id'>;

const CardContent: React.SFC<CardContentProps> = (props) => {
	const rocket = new RocketViewModel(props.rocket);

	return (
		<div>
			<MissionName {...props} />
			<LaunchDate {...props} />
			<RocketName {...rocket} />
			<RocketCountry {...rocket} />
		</div>
	);
};

export default CardContent;
