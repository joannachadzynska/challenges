import { Dragon } from '../../dragons/interfaces/Dragon';

export interface Capsule {
	id: number;
	landings: number;
	missions?: CapsuleMission[];
	original_launch: Date;
	reuse_count?: number;
	status?: string;
	type: string;
	dragon?: Dragon;
}

export interface CapsuleMission {
	flight: number;
	name: string;
}

export interface Capsules {
	capsules: Capsule[];
}

export interface CapsuleDetailsQuery {
	capsule: Capsule;
}

export interface CapsulesPast {
	capsulesPast: Capsule[];
}

export interface CapsulesUpcoming {
	capsulesUpcoming: Capsule[];
}
