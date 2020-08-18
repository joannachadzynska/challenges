import { Payload } from '../interfaces/Payload';

export class PayloadViewModel {
	private readonly customers?: string[];
	private readonly id: number;
	private readonly manufacturer: string;
	private readonly nationality: string;
	private readonly orbit?: string;
	private readonly payloadMassKg?: number;
	private readonly payloadType?: string;
	private readonly reused?: boolean;

	constructor(data: Payload) {
		this.customers = data.customers;
		this.id = data.id;
		this.manufacturer = data.manufacturer;
		this.nationality = data.nationality;
		this.orbit = data.orbit;
		this.payloadMassKg = data.payload_mass_kg;
		this.payloadType = data.payload_type;
		this.reused = data.reused;
	}
}
