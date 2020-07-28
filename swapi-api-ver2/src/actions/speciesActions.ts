import { Species } from '../providers/swapiProvider/interfaces/Species';

// Define all your actions here
export enum SpeciesActions {
	IMPORT_SPECIES_DATA = '[species] IMPORT_ALL_SPECIES',
}

// Interfaces of dispatchers
interface ImportSpeciesData {
	type: SpeciesActions.IMPORT_SPECIES_DATA;
	payload: Species[];
}

export type SpeciesActionsTypes = ImportSpeciesData;

// Define all your dispatchers
export const importSpeciesData = (payload: Species[]): SpeciesActionsTypes => ({
	type: SpeciesActions.IMPORT_SPECIES_DATA,
	payload,
});
