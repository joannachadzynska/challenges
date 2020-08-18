import { Rocket } from '../../rockets/interfaces/Rocket';
// import { Payload } from '../../payloads/interfaces/Payload';
// import { Core } from '../../cores/interfaces/Core';

export interface LaunchRocket {
	rocket: Rocket;
}

// interface LaunchRocketFairings {
// 	recovered: boolean;
// 	recovery_attempt: boolean;
// 	reused: boolean;
// 	ship: string;
// }

// interface LaunchRocketFirstStage {
// 	cores?: LaunchRocketFirstStageCore[];
// }

// interface LaunchRocketSecondStage {
// 	block?: number;
// 	payloads?: Payload[];
// }

// interface LaunchRocketFirstStageCore {
// 	block?: number;
// 	core?: Core;
// 	flight: number;
// 	gridfins: boolean;
// 	land_success: boolean;
// 	landing_intent: boolean;
// 	landing_type: string;
// 	landing_vehicle: string;
// 	legs: boolean;
// 	reused: boolean;
// }
