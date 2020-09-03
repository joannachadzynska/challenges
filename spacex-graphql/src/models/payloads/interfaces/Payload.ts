export interface Payload {
	customers?: string[];
	id: number;
	manufacturer: string;
	nationality: string;
	orbit?: string;
	payload_mass_kg?: number;
	payload_mass_lbs?: number;
	payload_type?: string;
	reused?: boolean;
}

export interface Payloads {
	payloads: Payload[];
}
