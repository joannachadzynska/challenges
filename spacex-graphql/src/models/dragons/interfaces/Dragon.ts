import { Distance, Mass, Force } from '../../rockets/interfaces/Rocket';

export interface Dragon {
	active?: boolean;
	crew_capacity?: number;
	description: string;
	diameter?: Distance;
	dry_mass_kg?: number;
	first_flight: string;
	heat_shield?: DragonHeatShield;
	id: number;
	launch_payload_mass?: Mass;
	name: string;
	return_payload_mass?: Mass;
	thrusters?: DragonThrust[];
	trunk?: DragonTrunk;
	type: string;
	wikipedia: string;
}

export interface DragonHeatShield {
	dev_partner: string;
	material: string;
}

export interface DragonThrust {
	amount: number;
	fuel_1?: string;
	fuel_2?: string;
	pods?: number;
	thrust?: Force;
	type: string;
}

export interface DragonTrunk {
	cargo: DragonTrunkCargo;
	trunk_volume?: Volume;
}

export interface DragonTrunkCargo {
	solar_array: number;
	unpressurized_cargo: boolean;
}

export interface Volume {
	cubic_feet: number;
	cubic_meters: number;
}