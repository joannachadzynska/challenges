import React from 'react';

import {
	About,
	Landing,
	NotFound,
	RocketDetails,
	RocketListing,
	MissionsListing,
	MissionDetails,
} from '../pages';
import { RouteTransition, AnimatedRoutes } from './animation/RouteTransition';

const Routes: React.SFC = () => {
	return (
		<AnimatedRoutes exitBeforeEnter initial={false}>
			<RouteTransition exact path='/' slideUp={30}>
				<Landing />
			</RouteTransition>
			<RouteTransition path='/about' slideUp={30}>
				<About />
			</RouteTransition>
			<RouteTransition path='/missions' slideUp={30}>
				<MissionsListing />
			</RouteTransition>
			<RouteTransition path='/mission/:id' slideUp={30}>
				<MissionDetails />
			</RouteTransition>
			<RouteTransition path='/rockets' slideUp={30}>
				<RocketListing />
			</RouteTransition>
			<RouteTransition path='/rocket/:id' slideUp={30}>
				<RocketDetails />
			</RouteTransition>
			<RouteTransition path='*' slideUp={30}>
				<NotFound />
			</RouteTransition>
		</AnimatedRoutes>
	);
};

export default Routes;
