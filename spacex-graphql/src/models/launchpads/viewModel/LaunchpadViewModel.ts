import { Launchpad, Location } from '../interfaces/Launchpad';
import { Rocket } from '../../rockets/interfaces/Rocket';
import { RocketViewModel } from '../../RocketViewModel';

export class LaunchpadViewModel {
	private readonly attemptedLaunches?: number;
	private readonly details: string;
	private readonly id: number;
	private readonly location?: Location;
	private readonly name: string;
	private readonly status?: string;
	private readonly successfulLaunches?: number;
	private readonly vehiclesLaunched: RocketViewModel;
	private readonly wikipedia?: string;

	constructor(data: Launchpad) {
		// const rocketData: Rocket = {
		// 	active: data.vehicles_launched.ac,
		// 	boosters: data.rocket.rocket.boosters,
		// 	company: data.rocket.rocket.company,
		// 	cost_per_launch: data.rocket.rocket.cost_per_launch,
		// 	country: data.rocket.rocket.country,
		// 	description: data.rocket.rocket.description,
		// 	diameter: data.rocket.rocket.diameter,
		// 	engines: data.rocket.rocket.engines,
		// 	first_flight: data.rocket.rocket.first_flight,
		// 	first_stage: data.rocket.rocket.first_stage,
		// 	height: data.rocket.rocket.height,
		// 	id: data.rocket.rocket.id,
		// 	mass: data.rocket.rocket.mass,
		// 	name: data.rocket.rocket.name,
		// 	second_stage: data.rocket.rocket.second_stage,
		// 	stages: data.rocket.rocket.stages,
		// 	type: data.rocket.rocket.type,
		// 	wikipedia: data.rocket.rocket.wikipedia,
		// };
		this.attemptedLaunches = data.attempted_launches;
		this.details = data.details;
		this.id = data.id;
		this.location = data.location;
		this.name = data.name;
		this.status = data.status;
		this.successfulLaunches = data.successful_launches;
		this.vehiclesLaunched = new RocketViewModel(rocketData);
		this.wikipedia = data.wikipedia;
	}
}
