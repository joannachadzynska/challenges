import { Launchpad, Location } from '../interfaces/Launchpad';
import { Rocket } from '../../rockets/interfaces/Rocket';

export class LaunchpadViewModel {
	private readonly attemptedLaunches?: number;
	private readonly details: string;
	private readonly id: number;
	private readonly location?: Location;
	private readonly name: string;
	private readonly status?: string;
	private readonly successfulLaunches?: number;
	private readonly vehiclesLaunched: Rocket[];
	private readonly wikipedia?: string;

	constructor(data: Launchpad) {
		this.attemptedLaunches = data.attempted_launches;
		this.details = data.details;
		this.id = data.id;
		this.location = data.location;
		this.name = data.name;
		this.status = data.status;
		this.successfulLaunches = data.successful_launches;
		this.vehiclesLaunched = data.vehicles_launched;
		this.wikipedia = data.wikipedia;
	}
}
