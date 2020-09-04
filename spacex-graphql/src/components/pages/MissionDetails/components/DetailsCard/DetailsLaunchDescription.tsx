import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { Description } from './styles';

type DetailsLaunchDescriptionProps = Pick<LaunchViewModel, 'details'>;

const DetailsLaunchDescription: React.SFC<DetailsLaunchDescriptionProps> = ({
	details,
}) => (
	<Description>
		<p>{details}</p>
	</Description>
);

export default DetailsLaunchDescription;
