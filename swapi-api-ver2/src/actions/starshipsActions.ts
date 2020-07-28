import { Starship } from '../providers/swapiProvider/interfaces/Starship';

// Define all your actions here
export enum StarshipsActions {
	IMPORT_STARSHIPS_DATA = '[starships] IMPORT_ALL_STARSHIPS',
}

// Interfaces of dispatchers
interface ImportStarshipsData {
	type: StarshipsActions.IMPORT_STARSHIPS_DATA;
	payload: Starship[];
}

export type StarshipActionsTypes = ImportStarshipsData;

// Define all your dispatchers
export const importStarshipsData = (
	payload: Starship[]
): StarshipActionsTypes => ({
	type: StarshipsActions.IMPORT_STARSHIPS_DATA,
	payload,
});
