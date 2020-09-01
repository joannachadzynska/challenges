import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LatestMission from './Latest';
import NextMission from './Next';
import PastMissions from './Past';
import UpcomingMissions from './Upcoming';
import AllMissions from './All';

export interface RoutingProps {}

const Routing: React.SFC<RoutingProps> = () => {
	return (
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
};

export default Routing;
