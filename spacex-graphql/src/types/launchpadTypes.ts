export enum LaunchpadStatus {
	'active',
	'inactive',
	'unknown',
	'retired',
	'lost',
	'under construction',
}

export interface Launchpad {
	name: string;
	full_name: string;
	locality: string;
	region: string;
	timezone: string;
	latitude: number;
	longitude: number;
	launch_attempts: number;
	launch_successes: number;
	rockets: string[];
	launches: string[];
	details: string;
	status: string;
	id: string;
}
