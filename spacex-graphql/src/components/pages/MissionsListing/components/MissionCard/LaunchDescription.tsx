import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { MissionLaunchDescription } from './styles';

type LaunchDescriptionProps = Pick<LaunchViewModel, 'details'>;

const LaunchDescription: React.SFC<LaunchDescriptionProps> = ({ details }) => (
	<MissionLaunchDescription>
		<p>{details}</p>
	</MissionLaunchDescription>
);

export default LaunchDescription;
