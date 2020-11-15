import React from 'react';
import * as ROUTES from '../constants/routes';
import {
	About,
	CapsuleDetails,
	DragonDetails,
	Home,
	MissionDetails,
	Missions,
	NotFound,
	RocketDetails,
	Vehicles,
} from '../pages';
import { AnimatedRoutes, RouteTransition } from './animation/RouteTransition';

const Routes: React.SFC = () => {
	return (
		<AnimatedRoutes exitBeforeEnter initial={false}>
			<RouteTransition exact path={ROUTES.HOME} slideUp={30}>
				<Home />
			</RouteTransition>
			<RouteTransition path={ROUTES.ABOUT} slideUp={30}>
				<About />
			</RouteTransition>
			<RouteTransition path={ROUTES.MISSIONS} slideUp={30}>
				<Missions />
			</RouteTransition>
			<RouteTransition path={ROUTES.MISSION_DETAILS} slideUp={30}>
				<MissionDetails />
			</RouteTransition>
			<RouteTransition path={ROUTES.VEHICLES} slideUp={30}>
				<Vehicles />
			</RouteTransition>
			<RouteTransition path={ROUTES.VEHICLE_ROCKET_DETAILS} slideUp={30}>
				<RocketDetails />
			</RouteTransition>
			<RouteTransition path={ROUTES.VEHICLE_DRAGON_DETAILS} slideUp={30}>
				<DragonDetails />
			</RouteTransition>
			<RouteTransition path={ROUTES.VEHICLE_CAPSULE_DETAILS} slideUp={30}>
				<CapsuleDetails />
			</RouteTransition>
			<RouteTransition path='*' slideUp={30}>
				<NotFound />
			</RouteTransition>
		</AnimatedRoutes>
	);
};

export default Routes;
