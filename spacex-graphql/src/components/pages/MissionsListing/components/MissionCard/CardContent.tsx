import React from 'react';
import { Button } from '../../../../../styles/Button';
import MissionName from './MiissionName';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import LaunchDate from './LaunchDate';
import LaunchDescription from './LaunchDescription';
import { CardContentContainer } from './styles';

type CardContentProps = Omit<LaunchViewModel, 'image'>;

const CardContent: React.SFC<CardContentProps> = (props) => {
	return (
		<CardContentContainer>
			<MissionName {...props} />
			<LaunchDate {...props} />
			<LaunchDescription {...props} />
			<Button>More Details</Button>
		</CardContentContainer>
	);
};

export default CardContent;
