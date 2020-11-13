import { Jumbotron } from 'components';
import React from 'react';
import { Header, NextMissionCountdown } from './components';

const JumbotronContainer: React.SFC = () => {
	return (
		<Jumbotron>
			<Header />
			<NextMissionCountdown />
			<Jumbotron.Button path='/missions/next'>Explore</Jumbotron.Button>
		</Jumbotron>
	);
};

export default JumbotronContainer;
