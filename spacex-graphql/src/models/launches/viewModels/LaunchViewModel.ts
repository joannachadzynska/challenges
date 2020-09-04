import {
	Launch,
	LaunchSite,
	LaunchLinks,
	LaunchTelemetry,
} from '../interfaces/Launch';

import { Ship } from '../../ships/interfaces/Ship';
import { LaunchRocketViewModel } from './LaunchRocketViewModel';
import { LaunchRocket } from '../interfaces/LaunchRocket';

export class LaunchViewModel {
	public readonly details: string;
	public readonly id: string | number;
	public readonly launchDateLocal: Date;
	public readonly launchSite: LaunchSite;
	public readonly launchSuccess?: boolean;
	public readonly launchYear?: string;
	public readonly links: LaunchLinks;
	public readonly missionId: string[];
	public readonly missionName: string;
	public readonly rocket: LaunchRocketViewModel;
	public readonly staticFireDateUnix?: Date;
	public readonly telemetry?: LaunchTelemetry;
	public readonly upcoming: boolean;
	public readonly ships: Ship[];

	constructor(data: Launch) {
		const launchRocketData: LaunchRocket = {
			first_stage: data.rocket.first_stage,
			rocket_name: data.rocket.rocket_name,
			rocket_type: data.rocket.rocket_type,
			rocket: data.rocket.rocket,
			second_stage: data.rocket.second_stage,
		};

		this.details = data.details;
		this.id = data.id;
		this.launchDateLocal = new Date(data.launch_date_local);
		this.launchSite = data.launch_site;
		this.launchSuccess = data.launch_success;
		this.launchYear = data.launch_year;
		this.links = data.links;
		this.missionId = data.mission_id;
		this.missionName = data.mission_name;
		this.rocket = new LaunchRocketViewModel(launchRocketData);
		this.staticFireDateUnix = new Date(data.static_fire_date_unix);
		this.telemetry = data.telemetry;
		this.upcoming = data.upcoming;
		this.ships = data.ships;
	}
}
