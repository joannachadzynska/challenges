import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { charactersReducer } from './charactersReducer';
import { filmsReducer } from './filmsReducer';
import { planetsReducer } from './planetsReducer';
import { speciesReducer } from './speciesReducer';
import { starshipsReducer } from './starshipsReducer';
import { vehiclesReducer } from './vehiclesReducer';

export const config = {
	key: 'root',
	storage: storage,
	whitelist: [
		'characters',
		'films',
		'planets',
		'species',
		'starships',
		'vehicles',
	],
};

const rootReducer = combineReducers({
	characters: charactersReducer,
	films: filmsReducer,
	planets: planetsReducer,
	species: speciesReducer,
	starships: starshipsReducer,
	vehicles: vehiclesReducer,
});

export const persistedReducer = persistReducer(config, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
