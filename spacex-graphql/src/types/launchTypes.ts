import { CoreLaunch } from './coreTypes';

export enum LaunchDatePrecision {
	'half',
	'quarter',
	'year',
	'month',
	'day',
	'hour',
}
export interface Launch {
	fairings: Fairings;
	links: Links;
	static_fire_date_utc: string;
	static_fire_date_unix: number;
	tbd: boolean;
	net: boolean;
	window: number;
	rocket: string;
	success: boolean;
	details: string;
	crew: number[];
	ships: string[];
	capsules: string[];
	payloads: string[];
	launchpad: string;
	auto_update: boolean;
	launch_library_id: string;
	failures: Failure[];
	flight_number: number;
	name: string;
	date_utc: string;
	date_unix: number;
	date_local: string;
	date_precision: string;
	upcoming: boolean;
	cores: CoreLaunch[];
	id: string;
}

export interface Failure {
	time: number;
	altitude: number;
	reason: string;
}

export interface Fairings {
	reused: boolean;
	recovery_attempt: boolean;
	recovered: boolean;
	ships: string[];
}

export interface Links {
	patch: Patch;
	reddit: Reddit;
	flickr: Flickr;
	presskit: string;
	webcast: string;
	youtube_id: string;
	article: string;
	wikipedia: string;
}

export interface Patch {
	small: string;
	large: string;
}

export interface Reddit {
	campaign: string;
	launch: string;
	media: string;
	recovery: string;
}

export interface Flickr {
	small: string[];
	original: string[];
}
