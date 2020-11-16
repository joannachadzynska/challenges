import { Distance, Mass } from '../../rockets/interfaces/Rocket';
import {
	Dragon,
	DragonHeatShield,
	DragonThrust,
	DragonTrunk,
} from '../interfaces/Dragon';

export class DragonViewModel {
	public readonly active?: boolean;
	public readonly crewCapacity?: number;
	public readonly description?: string;
	public readonly diameter?: Distance;
	public readonly dryMassKg?: number;
	public readonly dryMassLb?: number;
	public readonly firstFlight?: string;
	public readonly heatShield?: DragonHeatShield;
	public readonly heightWTrunk?: Distance;
	public readonly id?: number;
	public readonly launchPayloadMass?: Mass;
	public readonly name?: string;
	public readonly returnPayloadMass?: Mass;
	public readonly thrusters?: DragonThrust[];
	public readonly trunk?: DragonTrunk;
	public readonly type?: string;
	public readonly wikipedia?: string;

	constructor(data: Dragon) {
		this.active = data.active;
		this.crewCapacity = data.crew_capacity;
		this.description = data.description;
		this.diameter = data.diameter;
		this.dryMassKg = data.dry_mass_kg;
		this.dryMassLb = data.dry_mass_lb;
		this.firstFlight = data.first_flight;
		this.heatShield = data.heat_shield;
		this.heightWTrunk = data.height_w_trunk;
		this.id = data.id;
		this.launchPayloadMass = data.launch_payload_mass;
		this.name = data.name;
		this.returnPayloadMass = data.return_payload_mass;
		this.thrusters = data.thrusters;
		this.trunk = data.trunk;
		this.type = data.type;
		this.wikipedia = data.wikipedia;
	}
}
