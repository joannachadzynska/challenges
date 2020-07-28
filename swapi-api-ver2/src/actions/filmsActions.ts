import { Film } from '../providers/swapiProvider/interfaces/Film';

// Define all your actions here
export enum FilmsActions {
	IMPORT_FILMS_DATA = '[films] IMPORT_ALL_FILMS',
}

// Interfaces of dispatchers
interface ImportFilmsData {
	type: FilmsActions.IMPORT_FILMS_DATA;
	payload: Film[];
}

export type FilmActionsTypes = ImportFilmsData;

// Define all your dispatchers
export const importFilmsData = (payload: Film[]): FilmActionsTypes => ({
	type: FilmsActions.IMPORT_FILMS_DATA,
	payload,
});
