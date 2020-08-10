export interface Ship {
	home_port: string;
	id: number;
	image: string;
	imo: number;
	missions: ShipMission[];
	model: string;
	name: string;
	position: ShipLocation;
	roles: string[];
	status: string;
	successful_landings: number;
	type: string;
	url: string;
	weight_kg: number;
	year_built: number;
}

export interface ShipMission {
	flight: string;
	name: string;
}

export interface ShipLocation {
	latitude: number;
	longitude: number;
}
