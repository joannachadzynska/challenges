import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
	AllMissions,
	LatestMission,
	NextMission,
	PastMissions,
	UpcomingMissions,
} from '.';

const Routing: React.SFC = () => (
	<Switch>
		<Route exact path='/missions'>
			<AllMissions />
		</Route>
		<Route exact path='/missions/latest' component={LatestMission}>
			<LatestMission />
		</Route>
		<Route exact path='/missions/next'>
			<NextMission />
		</Route>
		<Route exact path='/missions/past'>
			<PastMissions />
		</Route>
		<Route exact path='/missions/upcoming'>
			<UpcomingMissions />
		</Route>
	</Switch>
);

export default Routing;
