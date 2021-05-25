export interface CoreLaunch {
	core: string;
	flight: number;
	gridfins: boolean;
	legs: boolean;
	reused: boolean;
	landing_attempt: boolean;
	landing_success: boolean;
	landing_type: string;
	landpad: string;
}

export enum CoreStatus {
	'active',
	'inactive',
	'unknown',
	'expended',
	'lost',
	'retired',
}

export interface Core {
	block: number;
	reuse_count: number;
	rtls_attempts: number;
	rtls_landings: number;
	asds_attempts: number;
	asds_landings: number;
	last_update: string;
	launches: string[];
	serial: string;
	status: string;
	id: string;
}
