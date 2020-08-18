import { Capsule, CapsuleMission } from '../interfaces/Capsule';
import { Dragon } from '../../dragons/interfaces/Dragon';
import { DragonViewModel } from '../../dragons/viewModels/DragonViewModel';

export class CapsuleViewModel {
	private readonly id: number;
	private readonly landings: number;
	private readonly missions?: CapsuleMission[];
	private readonly originalLaunch: Date;
	private readonly reuseCount?: number;
	private readonly status?: string;
	private readonly type: string;
	private readonly dragon?: DragonViewModel;

	constructor(data: Capsule) {
		const dragonData: Dragon = {
			active: data.dragon?.active,
			crew_capacity: data.dragon?.crew_capacity,
			description: data.dragon?.description,
			diameter: data.dragon?.diameter,
			dry_mass_kg: data.dragon?.dry_mass_kg,
			first_flight: data.dragon?.first_flight,
			heat_shield: data.dragon?.heat_shield,
			id: data.dragon?.id,
			launch_payload_mass: data.dragon?.launch_payload_mass,
			name: data.dragon?.name,
			return_payload_mass: data.dragon?.return_payload_mass,
			thrusters: data.dragon?.thrusters,
			trunk: data.dragon?.trunk,
			type: data.dragon?.type,
			wikipedia: data.dragon?.wikipedia,
		};

		this.id = data.id;
		this.landings = data.landings;
		this.missions = data.missions;
		this.originalLaunch = new Date(data.original_launch);
		this.reuseCount = data.reuse_count;
		this.status = data.status;
		this.type = data.type;
		this.dragon = new DragonViewModel(dragonData);
	}
}
