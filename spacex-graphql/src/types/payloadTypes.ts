import { DragonPayload } from './dragonTypes';

export interface Payload {
	dragon: DragonPayload;
	name: string;
	type: string;
	reused: boolean;
	launch: string;
	customers: string[];
	norad_ids: number[];
	nationalities: string[];
	manufacturers: string[];
	mass_kg: number;
	mass_lbs: number;
	orbit: string;
	reference_system: string;
	regime: string;
	longitude: number;
	semi_major_axis_km: number;
	eccentricity: number;
	periapsis_km: number;
	apoapsis_km: number;
	inclination_deg: number;
	period_min: number;
	lifespan_years: number;
	epoch: string;
	mean_motion: number;
	raan: number;
	arg_of_pericenter: number;
	mean_anomaly: number;
	id: string;
}
