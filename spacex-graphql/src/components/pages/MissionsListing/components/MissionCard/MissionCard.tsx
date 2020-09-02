import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { Launch } from '../../../../../models/launches/interfaces/Launch';
import CardImage from './CardImage';
import CardContent from './CardContent';
import MissionSuccess from './MissionSuccess';
import { CardContainer } from './styles';
import { Button } from '../../../../../styles/Button';

const MissionCard: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<CardContainer>
			<MissionSuccess {...data} />
			<CardImage {...data} />
			<CardContent {...data} />
			<Button>More details</Button>
		</CardContainer>
	);
};

export default MissionCard;
