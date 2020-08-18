import { Rocket } from '../../rockets/interfaces/Rocket';

export interface Launchpad {
	attempted_launches?: number;
	details: string;
	id: number;
	location?: Location;
	name: string;
	status?: string;
	successful_launches?: number;
	vehicles_launched: Rocket[];
	wikipedia?: string;
}

export interface Location {
	latitude: number;
	longitude: number;
	name: string;
	region: string;
}
