import { Mission } from '../interfaces/Mission';
import { Payload } from '../../payloads/interfaces/Payload';

export class MissionViewModel {
	private readonly description: string;
	private readonly id: number;
	private readonly manufacturers: string[];
	private readonly name: string;
	private readonly twitter?: string;
	private readonly website?: string;
	private readonly wikipedia?: string;
	private readonly payloads?: Payload[];

	constructor(data: Mission) {
		this.description = data.description;
		this.id = data.id;
		this.manufacturers = data.manufacturers;
		this.name = data.name;
		this.twitter = data.twitter;
		this.website = data.website;
		this.wikipedia = data.wikipedia;
		this.payloads = data.payloads;
	}
}
