import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../styles/Button';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';

type DetailsButtonProps = Pick<LaunchViewModel, 'id'>;

const DetailsButton: React.SFC<DetailsButtonProps> = ({ id }) => (
	<Button>
		<Link to={`/mission/${id}`}>More Details</Link>
	</Button>
);

export default DetailsButton;
