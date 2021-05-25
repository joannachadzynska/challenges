import { Length, Mass, Thrust } from './metricTypes';

export interface Rocket {
	height: Length;
	diameter: Length;
	mass: Mass;
	first_stage: FirstStage;
	second_stage: SecondStage;
	engines: Engines;
	landing_legs: LandingLegs;
	payload_weights: PayloadWeight[];
	flickr_images: string[];
	name: string;
	type: string;
	active: boolean;
	stages: number;
	boosters: number;
	cost_per_launch: number;
	success_rate_pct: number;
	first_flight: string;
	country: string;
	company: string;
	wikipedia: string;
	description: string;
	id: string;
}

export interface PayloadWeight {
	id: string;
	name: string;
	kg: number;
	lb: number;
}

export interface FirstStage {
	thrust_sea_level: Thrust;
	thrust_vacuum: Thrust;
	reusable: boolean;
	engines: number;
	fuel_amount_tons: number;
	burn_time_sec: number;
}

export interface SecondStage {
	thrust: Thrust;
	payloads: SecondStagePayloads;
	reusable: boolean;
	engines: number;
	fuel_amount_tons: number;
	burn_time_sec: number;
}

export interface SecondStagePayloads {
	composite_fairing: CompositeFairing;
	option_1: string;
}

export interface CompositeFairing {
	height: Length;
	diameter: Length;
}

export interface Engines {
	isp: {
		sea_level: number;
		vacuum: number;
	};
	thrust_sea_level: Thrust;
	thrust_vacuum: Thrust;
	number: number;
	type: string;
	version: string;
	layout: string;
	engine_loss_max: number;
	propellant_1: string;
	propellant_2: string;
	thrust_to_weight: number;
}

export interface LandingLegs {
	number: number;
	material: string;
}
