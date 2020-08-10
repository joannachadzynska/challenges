import { Rocket } from './Rocket';

export interface LaunchSite {
	site_id?: string;
	site_name_long: string;
	site_name?: string;
}

export interface LaunchLinks {
	article_link: string;
	flickr_images: string[];
	mission_patch: string;
	video_link: string;
	wikipedia: string;
}

export interface LaunchRocket {
	rocket_name: string;
	rocket_type?: string;
	rocket: Rocket;
}
