import {
	Launch,
	LaunchSite,
	LaunchLinks,
	LaunchTelemetry,
} from '../interfaces/Launch';

import { Ship } from '../../ships/interfaces/Ship';
import { Rocket } from '../../rockets/interfaces/Rocket';
import { RocketViewModel } from '../../rockets/viewModels/RocketViewModel';

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
	public readonly rocket: RocketViewModel;
	public readonly staticFireDateUnix?: Date;
	public readonly telemetry?: LaunchTelemetry;
	public readonly upcoming: boolean;
	public readonly ships?: Ship[];

	constructor(data: Launch) {
		const rocketData: Rocket = {
			active: data.rocket.rocket.active,
			boosters: data.rocket.rocket.boosters,
			company: data.rocket.rocket.company,
			cost_per_launch: data.rocket.rocket.cost_per_launch,
			country: data.rocket.rocket.country,
			description: data.rocket.rocket.description,
			diameter: data.rocket.rocket.diameter,
			engines: data.rocket.rocket.engines,
			first_flight: data.rocket.rocket.first_flight,
			first_stage: data.rocket.rocket.first_stage,
			height: data.rocket.rocket.height,
			id: data.rocket.rocket.id,
			mass: data.rocket.rocket.mass,
			name: data.rocket.rocket.name,
			second_stage: data.rocket.rocket.second_stage,
			stages: data.rocket.rocket.stages,
			type: data.rocket.rocket.type,
			wikipedia: data.rocket.rocket.wikipedia,
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
		this.rocket = new RocketViewModel(rocketData);
		this.staticFireDateUnix = new Date(data.static_fire_date_unix);
		this.telemetry = data.telemetry;
		this.upcoming = data.upcoming;
		this.ships = data.ships;
	}
}
