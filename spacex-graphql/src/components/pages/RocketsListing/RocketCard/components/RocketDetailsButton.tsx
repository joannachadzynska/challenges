import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { StyledLinkButton } from 'styles/Button';

type RocketDetailsButtonProps = Pick<RocketViewModel, 'id'>;

const RocketDetailsButton: React.SFC<RocketDetailsButtonProps> = ({ id }) => (
	<StyledLinkButton variant='yellow' fontSize='1' to={`rocket/${id}`}>
		Rocket Details
	</StyledLinkButton>
);

export default RocketDetailsButton;
