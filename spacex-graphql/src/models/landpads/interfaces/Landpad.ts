export interface Landpad {
	attempted_landings: string;
	details: string;
	full_name: string;
	id: number;
	landing_type?: string;
	location?: Location;
	status?: string;
	successful_landings?: string;
	wikipedia?: string;
}

export interface Location {
	latitude: number;
	longitude: number;
	name: string;
	region: string;
}
