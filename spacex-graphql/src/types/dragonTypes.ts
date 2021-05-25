import { Length, Mass, Thrust, Volume } from './metricTypes';

export interface Dragon {
	heat_shield: HeatShield;
	launch_payload_mass: Mass;
	launch_payload_vol: Volume;
	return_payload_mass: Mass;
	return_payload_vol: Volume;
	pressurized_capsule: {
		payload_volume: Volume;
	};
	trunk: Trunk;
	height_w_trunk: Length;
	diameter: Length;
	first_flight: string;
	flickr_images: string[];
	name: string;
	type: string;
	active: boolean;
	crew_capacity: number;
	sidewall_angle_deg: number;
	orbit_duration_yr: number;
	dry_mass_kg: number;
	dry_mass_lb: number;
	thrusters: Thruster[];
	wikipedia: string;
	description: string;
	id: string;
}

export interface DragonPayload {
	capsule: string; // dragon id
	mass_returned_kg: number;
	mass_returned_lbs: number;
	flight_time_sec: number;
	manifest: string;
	water_landing: boolean;
	land_landing: boolean;
}

export interface HeatShield {
	material: string;
	size_meters: number;
	temp_degrees: number;
	dev_partner: string;
}

export interface Thruster {
	type: string;
	amount: number;
	pods: number;
	fuel_1: string;
	fuel_2: string;
	isp: number;
	thrust: Thrust;
}

export interface Trunk {
	trunk_volume: Volume;
	cargo: Cargo;
}

export interface Cargo {
	solar_array: number;
	unpressurized_cargo: boolean;
}
