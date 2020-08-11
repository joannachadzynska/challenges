import React from 'react';
import {
	About,
	Landing,
	LaunchesPastListing,
	NotFound,
	RocketDetails,
	RocketListing,
} from '../pages';
import { RouteTransition, AnimatedRoutes } from './animation/RouteTransition';

const Routes: React.SFC = () => {
	return (
		<section>
			<AnimatedRoutes exitBeforeEnter initial={false}>
				<RouteTransition exact path='/'>
					<Landing />
				</RouteTransition>
				<RouteTransition path='/about'>
					<About />
				</RouteTransition>
				<RouteTransition path='/rockets'>
					<RocketListing />
				</RouteTransition>
				<RouteTransition path='/rocket/:id'>
					<RocketDetails />
				</RouteTransition>
				<RouteTransition path='/launches'>
					<LaunchesPastListing />
				</RouteTransition>
				<RouteTransition path='*'>
					<NotFound />
				</RouteTransition>
			</AnimatedRoutes>
		</section>
	);
};

export default Routes;
