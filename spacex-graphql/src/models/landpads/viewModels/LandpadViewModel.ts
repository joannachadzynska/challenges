import { Landpad, Location } from '../interfaces/Landpad';

export class LandpadViewModel {
	private readonly attemptedLandings: string;
	private readonly details: string;
	private readonly fullName: string;
	private readonly id: number;
	private readonly landingType?: string;
	private readonly location?: Location;
	private readonly status?: string;
	private readonly successfulLandings?: string;
	private readonly wikipedia?: string;

	constructor(data: Landpad) {
		this.attemptedLandings = data.attempted_landings;
		this.details = data.details;
		this.fullName = data.full_name;
		this.id = data.id;
		this.landingType = data.landing_type;
		this.location = data.location;
		this.status = data.status;
		this.successfulLandings = data.successful_landings;
		this.wikipedia = data.wikipedia;
	}
}
