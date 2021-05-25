export enum FairingsStatus {
	'active',
	'inactive',
	'unknown',
	'expended',
	'lost',
	'retired',
}

export enum FairingsVersion {}
// '1.0',
// '2.0',
// '2.1',

export interface Fairings {
	serial: string;
	version: string;
	status: string;
	reuse_count: number;
	net_landing_attempts: number;
	net_landing: number;
	water_landing_attempts: number;
	water_landing: number;
	last_update: string;
	launches: string[];
}
