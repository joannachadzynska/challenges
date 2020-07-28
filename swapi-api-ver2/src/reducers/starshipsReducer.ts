import {
	StarshipsActions,
	StarshipActionsTypes,
} from '../actions/starshipsActions';

import { Starship } from '../providers/swapiProvider/interfaces/Starship';

const starships: Starship[] = [];

export const starshipsReducer = (
	state = starships,
	action: StarshipActionsTypes
): Starship[] => {
	switch (action.type) {
		case StarshipsActions.IMPORT_STARSHIPS_DATA:
			return action.payload;

		default:
			return state;
	}
};
