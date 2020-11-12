export interface Rocket {
	active?: boolean;
	boosters?: number;
	company: string;
	cost_per_launch?: number;
	country: string;
	description: string;
	diameter?: Distance;
	engines: RocketEngines;
	first_flight: Date;
	first_stage: RocketFirstStage;
	height?: Distance;
	id: number;
	mass: Mass;
	name: string;
	payload_weights: RocketPayloadWeight[];
	second_stage?: RocketSecondStage;
	stages?: number;
	type: string;
	wikipedia: string;
}

export interface Distance {
	feet: number;
	meters: number;
}

export interface Force {
	kN: number;
	lbf: number;
}

export interface Mass {
	kg: number;
	lb: number;
}

export interface RocketEngines {
	number: number;
	type: string;
	version: string;
	layout: string;
	engine_loss_max: string;
	propellant_1: string;
	propellant_2: string;
	thrust_sea_level: Force;
	thrust_vacuum: Force;
	thrust_to_weight: number;
}

export interface RocketFirstStage {
	burn_time_sec: number;
	engines: number;
	fuel_amount_tons: number;
	reusable: boolean;
	thrust_sea_level: Force;
	thrust_vacuum: Force;
}

export interface RocketLandingLegs {
	number: number;
	material: string;
}

export interface RocketPayloadWeight {
	id: string;
	kg: number;
	lb: number;
	name: string;
}

export interface RocketSecondStage {
	burn_time_sec: number;
	engines: number;
	fuel_amount_tons: number;
	payloads: RocketSecondStagePayloads;
	thrust: Force;
}

export interface RocketSecondStagePayloads {
	option_1: String;
	composite_fairing: RocketSecondStagePayloadCompositeFairing;
}

export interface RocketSecondStagePayloadCompositeFairing {
	height: Distance;
	diameter: Distance;
}

export interface Rockets {
	rockets: Rocket[];
}

export interface RocketDetailsQuery {
	rocket: Rocket;
}
