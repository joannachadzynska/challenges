export enum CrewStatus {
	'active',
	'inactive',
	'retired',
	'unknown',
}

export interface Crew {
	name: string;
	agency: string;
	image: string;
	wikipedia: string;
	launches: string[];
	status: CrewStatus;
	id: string;
}
