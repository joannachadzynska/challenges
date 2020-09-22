import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { StyledRocketName } from '../styles';

type RocketNameProps = Pick<RocketViewModel, 'name'>;

const RocketName: React.SFC<RocketNameProps> = ({ name }) => (
	<StyledRocketName>{name}</StyledRocketName>
);

export default RocketName;
