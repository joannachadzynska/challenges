import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { StyledRocketDescription } from '../styles';

type RocketDescriptionProps = Pick<RocketViewModel, 'description'>;

const RocketDescription: React.SFC<RocketDescriptionProps> = ({
	description,
}) => (
	<StyledRocketDescription>
		<p>{description}</p>
	</StyledRocketDescription>
);

export default RocketDescription;
