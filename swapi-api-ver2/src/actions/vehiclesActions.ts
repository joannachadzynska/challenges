import { Vehicle } from '../providers/swapiProvider/interfaces/Vehicle';

// Define all your actions here
export enum VehiclesActions {
	IMPORT_VEHICLES_DATA = '[vehicles] IMPORT_ALL_VEHICLES',
}

// Interfaces of dispatchers
interface ImportVehiclesData {
	type: VehiclesActions.IMPORT_VEHICLES_DATA;
	payload: Vehicle[];
}

export type VehicleActionsTypes = ImportVehiclesData;

// Define all your dispatchers
export const importVehiclesData = (
	payload: Vehicle[]
): VehicleActionsTypes => ({
	type: VehiclesActions.IMPORT_VEHICLES_DATA,
	payload,
});
