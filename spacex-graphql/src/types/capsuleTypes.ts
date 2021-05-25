export enum CapsuleStatus {
	'unknown',
	'active',
	'retired',
	'destroyed',
}

export enum CapsuleType {
	'Dragon 1.number',
	'Dragon 1.1',
	'Dragon 2.0',
}

export interface Capsule {
	reuse_count: number;
	water_landings: number;
	land_landings: number;
	last_update: string;
	launches: string[];
	serial: string;
	status: string;
	type: string;
	id: string;
	dragon?: string;
}
