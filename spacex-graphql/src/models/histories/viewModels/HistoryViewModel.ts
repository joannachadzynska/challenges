import { History, Link } from '../interfaces/History';
import { LaunchViewModel } from '../../launches/viewModels/LaunchViewModel';
import { Launch } from '../../launches/interfaces/Launch';

export class HistoryViewModel {
	private readonly details: string;
	private readonly eventDateUnix?: Date;
	private readonly eventDateUtc?: Date;
	private readonly id: number;
	private readonly links?: Link;
	private readonly title: string;
	private readonly flight: LaunchViewModel;

	constructor(data: History) {
		const launchData: Launch = {
			details: data.flight.details,
			id: data.flight.id,
			launch_date_local: data.flight.launch_date_local,
			launch_site: data.flight.launch_site,
			launch_success: data.flight.launch_success,
			launch_year: data.flight.launch_year,
			links: data.flight.links,
			mission_id: data.flight.mission_id,
			mission_name: data.flight.mission_name,
			rocket: data.flight.rocket,
			static_fire_date_unix: data.flight.static_fire_date_unix,
			telemetry: data.flight.telemetry,
			upcoming: data.flight.upcoming,
			ships: data.flight.ships,
		};

		this.details = data.details;
		this.eventDateUnix = data.event_date_unix;
		this.eventDateUtc = data.event_date_utc;
		this.id = data.id;
		this.links = data.links;
		this.title = data.title;
		this.flight = new LaunchViewModel(launchData);
	}
}
