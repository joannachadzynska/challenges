import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { filmsReducer } from './filmsReducer';
import { planetsReducer } from './planetsReducer';
import { speciesReducer } from './speciesReducer';
import { starshipsReducer } from './starshipsReducer';
import { vehiclesReducer } from './vehiclesReducer';

export const rootReducer = combineReducers({
	characters: charactersReducer,
	films: filmsReducer,
	planets: planetsReducer,
	species: speciesReducer,
	starships: starshipsReducer,
	vehicles: vehiclesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
