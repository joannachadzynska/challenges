import {
	Rocket,
	Distance,
	RocketEngines,
	RocketFirstStage,
	Mass,
	RocketSecondStage,
} from '../interfaces/Rocket';

export class RocketViewModel {
	public readonly active?: boolean;
	public readonly boosters?: number;
	public readonly company: string;
	public readonly costPerLaunch?: number;
	public readonly country: string;
	public readonly description: string;
	public readonly diameter?: Distance;
	public readonly engines?: RocketEngines;
	public readonly firstFlight: Date;
	public readonly firstStage?: RocketFirstStage;
	public readonly height?: Distance;
	public readonly id: number;
	public readonly mass?: Mass;
	public readonly name: string;
	public readonly secondStage?: RocketSecondStage;
	public readonly stages?: number;
	public readonly type: string;
	public readonly wikipedia: string;

	constructor(data: Rocket) {
		this.boosters = data.boosters;
		this.company = data.company;
		this.costPerLaunch = data.cost_per_launch;
		this.country = data.country;
		this.description = data.description;
		this.diameter = data.diameter;
		this.engines = data.engines;
		this.firstFlight = new Date(data.first_flight);
		this.firstStage = data.first_stage;
		this.active = data.active;
		this.height = data.height;
		this.id = data.id;
		this.mass = data.mass;
		this.name = data.name;
		this.secondStage = data.second_stage;
		this.stages = data.stages;
		this.type = data.type;
		this.wikipedia = data.wikipedia;
	}
}
