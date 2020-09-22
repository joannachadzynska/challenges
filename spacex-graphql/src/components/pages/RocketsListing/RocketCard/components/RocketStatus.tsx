import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { RocketStatusContainer } from '../styles';

type RocketStatusProps = Pick<RocketViewModel, 'active'>;

const RocketStatus: React.SFC<RocketStatusProps> = ({ active }) => (
	<RocketStatusContainer isActive={active}>
		<span>Active: {active ? 'true' : 'false'}</span>
	</RocketStatusContainer>
);

export default RocketStatus;
