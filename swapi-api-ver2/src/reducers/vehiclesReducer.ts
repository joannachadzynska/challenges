import {
	VehiclesActions,
	VehicleActionsTypes,
} from '../actions/vehiclesActions';

import { Vehicle } from '../providers/swapiProvider/interfaces/Vehicle';

const vehicles: Vehicle[] = [];

export const vehiclesReducer = (
	state = vehicles,
	action: VehicleActionsTypes
): Vehicle[] => {
	switch (action.type) {
		case VehiclesActions.IMPORT_VEHICLES_DATA:
			return action.payload;

		default:
			return state;
	}
};
