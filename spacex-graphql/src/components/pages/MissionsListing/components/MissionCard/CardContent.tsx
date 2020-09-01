import React from 'react';
import { Button } from '../../../../../styles/Button';
import MissionName from './MiissionName';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import LaunchDate from './LaunchDate';
import LaunchDescription from './LaunchDescription';

type CardContentProps = Omit<LaunchViewModel, 'image'>;

const CardContent: React.SFC<CardContentProps> = (props) => {
	return (
		<div>
			<MissionName {...props} />
			<LaunchDate {...props} />
			<LaunchDescription {...props} />
			<Button>More Details</Button>
		</div>
	);
};

export default CardContent;
