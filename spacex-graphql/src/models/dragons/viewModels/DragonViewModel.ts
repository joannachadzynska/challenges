import {
	Dragon,
	DragonHeatShield,
	DragonThrust,
	DragonTrunk,
} from '../interfaces/Dragon';
import { Distance, Mass } from '../../rockets/interfaces/Rocket';

export class DragonViewModel {
	private readonly active?: boolean;
	private readonly crewCapacity?: number;
	private readonly description?: string;
	private readonly diameter?: Distance;
	private readonly dryMassKg?: number;
	private readonly firstFlight?: string;
	private readonly heatShield?: DragonHeatShield;
	private readonly id?: number;
	private readonly launchPayloadMass?: Mass;
	private readonly name?: string;
	private readonly returnPayloadMass?: Mass;
	private readonly thrusters?: DragonThrust[];
	private readonly trunk?: DragonTrunk;
	private readonly type?: string;
	private readonly wikipedia?: string;

	constructor(data: Dragon) {
		this.active = data.active;
		this.crewCapacity = data.crew_capacity;
		this.description = data.description;
		this.diameter = data.diameter;
		this.dryMassKg = data.dry_mass_kg;
		this.firstFlight = data.first_flight;
		this.heatShield = data.heat_shield;
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
