import React from 'react';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import { CardContainer } from './styles';
import {
	MissionSuccess,
	CardImage,
	CardContent,
	DetailsButton,
} from './components';

const MissionCard: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<CardContainer>
			<MissionSuccess {...data} />
			<CardImage {...data} />
			<CardContent {...data} />
			<DetailsButton {...data} />
		</CardContainer>
	);
};

export default MissionCard;
