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
				<RouteTransition exact path='/' slideUp={30}>
					<Landing />
				</RouteTransition>
				<RouteTransition path='/about' slideUp={30}>
					<About />
				</RouteTransition>
				<RouteTransition path='/rockets' slideUp={30}>
					<RocketListing />
				</RouteTransition>
				<RouteTransition path='/rocket/:id' slideUp={30}>
					<RocketDetails />
				</RouteTransition>
				<RouteTransition path='/launches' slideUp={30}>
					<LaunchesPastListing />
				</RouteTransition>
				<RouteTransition path='*' slideUp={30}>
					<NotFound />
				</RouteTransition>
			</AnimatedRoutes>
		</section>
	);
};

export default Routes;
