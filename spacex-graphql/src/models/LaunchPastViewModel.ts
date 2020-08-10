import { LaunchPast } from './LaunchPast';
import { Ship } from './Ships';
import { Rocket } from './Rocket';
import { RocketViewModel } from './RocketViewModel';

export class LaunchPastViewModel {
	public readonly articleLinks: string;
	public readonly details: string;
	public readonly id: number;
	public readonly image: string;
	public readonly launchDateLocal: Date;
	public readonly launchSite: string;
	public readonly launchSuccess: boolean;
	public readonly launchYear: string;
	public readonly missionId: string;
	public readonly missionName: string;
	public readonly rocket: RocketViewModel;
	public readonly upcoming?: boolean;
	public readonly ships?: Ship[];

	constructor(data: LaunchPast) {
		const rocketData: Rocket = {
			company: data.rocket.rocket.company,
			country: data.rocket.rocket.country,
			description: data.rocket.rocket.description,
			id: data.rocket.rocket.id,
			name: data.rocket.rocket.name,
			type: data.rocket.rocket.type,
		};

		this.articleLinks = data.links.article_link;
		this.details = data.details;
		this.id = data.id;
		this.image = data.links.flickr_images[0];
		this.launchDateLocal = new Date(data.launch_date_local);
		this.launchSuccess = data.launch_success;
		this.launchSite = data.launch_site.site_name_long;
		this.launchYear = data.launch_year;
		this.missionId = data.mission_id;
		this.missionName = data.mission_name;
		this.upcoming = data.upcoming;
		this.ships = data.ships;
		this.rocket = new RocketViewModel(rocketData);
	}
}
