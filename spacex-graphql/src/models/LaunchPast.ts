import { LaunchRocket, LaunchSite, LaunchLinks } from './Launches';
import { Ship } from './Ships';

export interface LaunchPast {
	details: string;
	id: number;
	is_tentative?: boolean;
	launch_date_local: Date;
	launch_site: LaunchSite;
	launch_success: boolean;
	launch_year: string;
	links: LaunchLinks;
	mission_id: string;
	mission_name: string;
	rocket: LaunchRocket;
	upcoming?: boolean;
	ships?: Ship[];
}

export interface LaunchesPastResult {
	launchesPast: LaunchPast[];
}
