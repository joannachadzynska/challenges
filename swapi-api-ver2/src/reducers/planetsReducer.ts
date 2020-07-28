import { PlanetsActions, PlanetActionsTypes } from '../actions/planetsActions';

import { Planet } from '../providers/swapiProvider/interfaces/Planet';

const planets: Planet[] = [];

export const planetsReducer = (
	state = planets,
	action: PlanetActionsTypes
): Planet[] => {
	switch (action.type) {
		case PlanetsActions.IMPORT_PLANETS_DATA:
			return action.payload;

		default:
			return state;
	}
};
