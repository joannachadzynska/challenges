import { SpeciesActions, SpeciesActionsTypes } from '../actions/speciesActions';

import { Species } from '../providers/swapiProvider/interfaces/Species';

const species: Species[] = [];

export const speciesReducer = (
	state = species,
	action: SpeciesActionsTypes
): Species[] => {
	switch (action.type) {
		case SpeciesActions.IMPORT_SPECIES_DATA:
			return action.payload;

		default:
			return state;
	}
};
