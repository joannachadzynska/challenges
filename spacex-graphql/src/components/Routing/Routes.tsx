import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
	About,
	Landing,
	LaunchesPastListing,
	NotFound,
	RocketDetails,
	RocketListing,
} from '../pages';

export interface RoutesProps {}

const Routes: React.SFC<RoutesProps> = () => {
	return (
		<section>
			<Switch>
				<Route exact path='/'>
					<Landing />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/rockets'>
					<RocketListing />
				</Route>
				<Route path='/rocket/:id'>
					<RocketDetails />
				</Route>
				<Route path='/launches'>
					<LaunchesPastListing />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</section>
	);
};

export default Routes;
