import { Rocket } from './Rocket';

export class RocketViewModel {
	public readonly active?: boolean;
	public readonly boosters?: number;
	public readonly company: string;
	public readonly costPerLaunch?: number;
	public readonly country: string;
	public readonly description: string;
	public readonly firstFlight?: Date;
	public readonly id?: number;
	public readonly name: string;
	public readonly type: string;
	public readonly wikipedia?: string;

	constructor(data: Rocket) {
		this.active = data.active;
		this.boosters = data.boosters;
		this.company = data.company;
		this.country = data.country;
		this.costPerLaunch = data.cost_per_launch;
		this.description = data.description;
		this.firstFlight = data.first_flight;
		this.id = data.id;
		this.name = data.name;
		this.type = data.type;
		this.wikipedia = data.wikipedia;
	}
}
