import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { Launch } from '../../../../../models/launches/interfaces/Launch';
import CardImage from './CardImage';
import CardContent from './CardContent';

const MissionCard: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<div>
			<CardImage {...data} />
			<CardContent {...data} />
		</div>
	);
};

export default MissionCard;
