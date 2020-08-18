import { LaunchRocket } from './LaunchRocket';
import { Ship } from '../../ships/interfaces/Ship';

export interface Launch {
	details: string;
	id: string | number;
	launch_date_local: Date;
	launch_site: LaunchSite;
	launch_success: boolean;
	launch_year: string;
	links: LaunchLinks;
	mission_id: string[];
	mission_name: string;
	rocket: LaunchRocket;
	static_fire_date_unix: Date;
	telemetry: LaunchTelemetry;
	upcoming: boolean;
	ships: Ship[];
}

export interface LaunchSite {
	site_id?: string;
	site_name_long: string;
	site_name?: string;
}

export interface LaunchLinks {
	article_link: string;
	flickr_images: string[];
	mission_patch_small?: string;
	mission_patch?: string;
	video_link: string;
	wikipedia: string;
}
export interface LaunchTelemetry {
	flight_club: string;
}

export interface Launches {
	launches: Launch[];
}
export interface LaunchesPast {
	launchesPast: Launch[];
}
export interface LaunchesUpcoming {
	launchesUpcoming: Launch[];
}
export interface LaunchLatest {
	launchLatest: Launch;
}
export interface LaunchNext {
	launchNext: Launch;
}
