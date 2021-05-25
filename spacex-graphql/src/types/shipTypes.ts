export interface Ship {
	legacy_id: string;
	model: string;
	type: string;
	roles: string[];
	imo: number;
	mmsi: number;
	abs: number;
	class: number;
	mass_kg: number;
	mass_lbs: number;
	year_built: number;
	home_port: string;
	status: string;
	speed_kn: number;
	course_deg: number;
	latitude: number;
	longitude: number;
	last_ais_update: string;
	link: string;
	image: string;
	launches: string[];
	name: string;
	active: boolean;
	id: string;
}
