import {
	Rocket,
	Distance,
	RocketEngines,
	RocketFirstStage,
	Mass,
	RocketSecondStage,
} from '../interfaces/Rocket';

export class RocketViewModel {
	private readonly active?: boolean;
	private readonly boosters?: number;
	private readonly company: string;
	private readonly costPerLaunch?: number;
	private readonly country: string;
	private readonly description: string;
	private readonly diameter?: Distance;
	private readonly engines?: RocketEngines;
	private readonly firstFlight: Date;
	private readonly firstStage?: RocketFirstStage;
	private readonly height?: Distance;
	private readonly id: number;
	private readonly mass?: Mass;
	private readonly name: string;
	private readonly secondStage?: RocketSecondStage;
	private readonly stages?: number;
	private readonly type: string;
	private readonly wikipedia: string;

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
