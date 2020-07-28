import { FilmsActions, FilmActionsTypes } from '../actions/filmsActions';

import { Film } from '../providers/swapiProvider/interfaces/Film';

const films: Film[] = [];

export const filmsReducer = (
	state = films,
	action: FilmActionsTypes
): Film[] => {
	switch (action.type) {
		case FilmsActions.IMPORT_FILMS_DATA:
			return action.payload;

		default:
			return state;
	}
};
