import { useAppSelector } from 'app/hooks';
import { Jumbotron } from 'components';
import React from 'react';
import { Countdown, Header } from './components';

const JumbotronContainer: React.SFC = () => {
	const nextMission = useAppSelector((state) => state.launches.launchNext);
	return (
		<Jumbotron>
			<Header />
			<Jumbotron.CountdownContainer>
				<Jumbotron.SubTitle>
					Next mission: <span>{nextMission.name}</span>
				</Jumbotron.SubTitle>
				<br />
				<Countdown />
			</Jumbotron.CountdownContainer>
			<Jumbotron.Button path='/missions/next'>Explore</Jumbotron.Button>
		</Jumbotron>
	);
};

export default JumbotronContainer;
