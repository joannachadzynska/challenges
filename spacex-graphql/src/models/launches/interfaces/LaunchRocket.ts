import { Payload } from '../../payloads/interfaces/Payload';
import { Rocket } from '../../rockets/interfaces/Rocket';

export interface LaunchRocket {
	first_stage: LaunchRocketFirstStage;
	rocket_name: string;
	rocket_type: string;
	rocket: Rocket;
	second_stage: LaunchRocketSecondStage;
}

export interface LaunchRocketFirstStage {
	cores: LaunchRocketFirstStageCore[];
}

export interface CapsuleMission {
	flight: number;
	name: string;
}

export interface Core {
	asds_attempts: number;
	asds_landings: number;
	block: number;
	id: number;
	missions: CapsuleMission[];
	original_launch: Date;
	reuse_count: number;
	rtls_attempts: number;
	rtls_landings: number;
	status: string;
	water_landing: boolean;
}

export interface LaunchRocketFirstStageCore {
	core: Core;
	flight: number;
	land_success: boolean;
	landing_intent: boolean;
	landing_type?: string;
	landing_vehicle: string;
	reused: boolean;
}

export interface LaunchRocketSecondStage {
	payloads: Payload[];
}
