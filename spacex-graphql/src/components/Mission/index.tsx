import React from 'react';
import { Container } from './styles/missionData';

export interface MissionProps {}

const Mission: React.SFC<MissionProps> = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export default Mission;
