import { Person } from '../providers/swapiProvider/interfaces/Person';

// Define all your actions here
export enum CharactersActions {
	IMPORT_CHARACTERS_DATA = '[characters] IMPORT_ALL_CHARACTERS',
}

// Interfaces of dispatchers
interface ImportCharactersData {
	type: CharactersActions.IMPORT_CHARACTERS_DATA;
	payload: Person[];
}

export type CharactersActionTypes = ImportCharactersData;

// Define all your dispatchers
export const importCharactersData = (
	payload: Person[]
): CharactersActionTypes => ({
	type: CharactersActions.IMPORT_CHARACTERS_DATA,
	payload,
});
