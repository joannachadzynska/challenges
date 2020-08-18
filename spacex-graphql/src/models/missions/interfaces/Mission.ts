import { Payload } from '../../payloads/interfaces/Payload';

export interface Mission {
	description: string;
	id: number;
	manufacturers: string[];
	name: string;
	twitter?: string;
	website?: string;
	wikipedia?: string;
	payloads?: Payload[];
}

export interface Missions {
	missions: Mission[];
}
