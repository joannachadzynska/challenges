import { Launch } from '../../launches/interfaces/Launch';

export interface History {
	details: string;
	event_date_unix?: Date;
	event_date_utc?: Date;
	id: number;
	links?: Link;
	title: string;
	flight: Launch;
}

export interface Link {
	article: string;
	reddit: string;
	wikipedia: string;
}

export interface Histories {
	histories: History[];
}
