import {
	LaunchRocket,
	LaunchRocketFirstStage,
	LaunchRocketSecondStage,
} from '../interfaces/LaunchRocket';
import { RocketViewModel } from '../../rockets/viewModels/RocketViewModel';
import { Rocket } from '../../rockets/interfaces/Rocket';

export class LaunchRocketViewModel {
	public readonly firstStage: LaunchRocketFirstStage;
	public readonly rocketName: string;
	public readonly rocketType: string | undefined;
	public readonly rocket: RocketViewModel;
	public readonly secondStage: LaunchRocketSecondStage;

	constructor(data: LaunchRocket) {
		const rocketData: Rocket = {
			active: data.rocket.active,
			boosters: data.rocket.boosters,
			company: data.rocket.company,
			cost_per_launch: data.rocket.cost_per_launch,
			country: data.rocket.country,
			description: data.rocket.description,
			engines: data.rocket.engines,
			first_flight: data.rocket.first_flight,
			first_stage: data.rocket.first_stage,
			height: data.rocket.height,
			id: data.rocket.id,
			mass: data.rocket.mass,
			name: data.rocket.name,
			second_stage: data.rocket.second_stage,
			stages: data.rocket.stages,
			type: data.rocket.type,
			wikipedia: data.rocket.wikipedia,
		};

		this.firstStage = data.first_stage;
		this.rocketName = data.rocket_name;
		this.rocketType = data.rocket_type;
		this.rocket = new RocketViewModel(rocketData);
		this.secondStage = data.second_stage;
	}
}
