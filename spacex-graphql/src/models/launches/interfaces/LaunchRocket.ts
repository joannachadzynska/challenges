import { Rocket } from '../../rockets/interfaces/Rocket';
import { Payload } from '../../payloads/interfaces/Payload';

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

export interface LaunchRocketFirstStageCore {
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
