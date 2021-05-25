import { useAppSelector } from 'app/hooks';
import { Jumbotron } from 'components';
import React from 'react';
import Countdown from './Countdown';

const NextMissionCountdown: React.SFC = () => {
	const nextMission = useAppSelector((state) => state.launches.launchNext);

	return (
		<Jumbotron.CountdownContainer>
			<Jumbotron.SubTitle>
				Next mission: <span>{nextMission.name}</span>
			</Jumbotron.SubTitle>
			<br />
			<Countdown />
		</Jumbotron.CountdownContainer>
	);
};

export default NextMissionCountdown;
