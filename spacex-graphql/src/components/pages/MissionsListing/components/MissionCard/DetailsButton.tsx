import React from 'react';
import { StyledLinkButton, Button } from '../../../../../styles/Button';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';

type DetailsButtonProps = Pick<LaunchViewModel, 'id'>;

const DetailsButton: React.SFC<DetailsButtonProps> = ({ id }) => (
	<StyledLinkButton variant='yellow' fontSize='1' to={`/mission/${id}`}>
		More Details
	</StyledLinkButton>
);

export default DetailsButton;
