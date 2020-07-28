import { Planet } from '../providers/swapiProvider/interfaces/Planet';

// Define all your actions here
export enum PlanetsActions {
	IMPORT_PLANETS_DATA = '[planets] IMPORT_ALL_PLANETS',
}

// Interfaces of dispatchers
interface ImportPlanetsData {
	type: PlanetsActions.IMPORT_PLANETS_DATA;
	payload: Planet[];
}

export type PlanetActionsTypes = ImportPlanetsData;

// Define all your dispatchers
export const importPlanetsData = (payload: Planet[]): PlanetActionsTypes => ({
	type: PlanetsActions.IMPORT_PLANETS_DATA,
	payload,
});
