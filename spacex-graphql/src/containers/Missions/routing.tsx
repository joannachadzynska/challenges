import * as ROUTES from 'constants/routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
	AllMissions,
	LatestMission,
	NextMission,
	PastMissions,
	UpcomingMissions,
} from './components';

const Routing: React.SFC = () => {
	return (
		<Switch>
			<Route exact path={ROUTES.MISSIONS}>
				<AllMissions />
			</Route>

			<Route exact path={ROUTES.MISSIONS_LATEST}>
				<LatestMission />
			</Route>

			<Route exact path={ROUTES.MISSIONS_NEXT}>
				<NextMission />
			</Route>

			<Route exact path={ROUTES.MISSIONS_PAST}>
				<PastMissions />
			</Route>

			<Route exact path={ROUTES.MISSIONS_UPCOMING}>
				<UpcomingMissions />
			</Route>
		</Switch>
	);
};

export default Routing;
