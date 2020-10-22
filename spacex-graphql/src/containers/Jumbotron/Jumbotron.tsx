import { Jumbotron } from 'components';
import React from 'react';
import { Header, NextMissionCountdown } from './components';

export interface JumbotronContainerProps {}

const JumbotronContainer: React.SFC<JumbotronContainerProps> = () => {
	return (
		<Jumbotron>
			<Header />
			<NextMissionCountdown />
			<Jumbotron.Button>Explore</Jumbotron.Button>
		</Jumbotron>
	);
};

export default JumbotronContainer;
