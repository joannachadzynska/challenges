import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';

type LaunchDescriptionProps = Pick<LaunchViewModel, 'details'>;

const LaunchDescription: React.SFC<LaunchDescriptionProps> = ({ details }) => {
	return (
		<div>
			<p>{details}</p>
		</div>
	);
};

export default LaunchDescription;
