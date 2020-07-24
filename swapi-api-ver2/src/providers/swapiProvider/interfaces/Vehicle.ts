import { Common } from "./Common";

export interface Vehicle extends Common {
	/**
 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
/**
 */
	name: string;
	/**
	 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
	 */
	model: string;
	/**
	 * The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
	 */
	vehicle_class: string;
	/**
	 * The manufacturer of this vehicle. Comma separated if more than one.
	 */
	manufacturer: string;
	/**
	 * The length of this vehicle in meters.
	 */
	length: string;
	/**
	 * The cost of this vehicle new, in Galactic Credits.
	 */
	cost_in_credits: string;
	/**
 * The number of personnel needed to run or pilot this vehicle.
/**
 */
	crew: string;
	/**
	 * The number of non-essential people this vehicle can transport.
	 */
	passengers: string;
	/**
	 * The maximum speed of this vehicle in the atmosphere.
	 */
	max_atmosphering_speed: string;
	/**
	 * The maximum number of kilograms that this vehicle can transport.
	 */
	cargo_capacity: string;
	/**
	 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
	 */
	consumables: string;
	/**
	 * An array of Film URL Resources that this vehicle has appeared in.
	 */
	films: string[];
	/**
	 *  An array of People URL Resources that this vehicle has been piloted by.
	 */
	pilots: string[];
}
