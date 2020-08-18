import { gql } from 'apollo-boost';

export const GET_LAUNCHES = gql`
	query getLaunches(
		$offset: Int = 0
		$limit: Int = 3
		$sort: String
		$order: String
	) {
		launches(limit: $limit, offset: $offset, order: $order, sort: $sort) {
			id
			details
			launch_date_local
			launch_site {
				site_name_long
			}
			launch_success
			launch_year
			links {
				flickr_images
				mission_patch
				mission_patch_small
				video_link
				wikipedia
				article_link
			}
			mission_id
			mission_name
			rocket {
				rocket_name
				rocket_type
				rocket {
					id
					name
					type
					description
					country
					company
				}
			}
		}
	}
`;
export const GET_LAUNCHES_PAST = gql`
	query getLaunchesPast(
		$offset: Int = 0
		$limit: Int = 3
		$sort: String
		$order: String
	) {
		launchesPast(limit: $limit, offset: $offset, order: $order, sort: $sort) {
			id
			details
			launch_date_local
			launch_site {
				site_name_long
			}
			launch_success
			launch_year
			links {
				flickr_images
				mission_patch
				mission_patch_small
				video_link
				wikipedia
				article_link
			}
			mission_id
			mission_name
			rocket {
				rocket_name
				rocket_type
				rocket {
					id
					name
					type
					description
					country
					company
				}
			}
		}
	}
`;
export const GET_LAUNCHES_UPCOMING = gql`
	query getLaunchesUpcoming(
		$offset: Int = 0
		$limit: Int = 3
		$sort: String
		$order: String
	) {
		launchesUpcoming(
			limit: $limit
			offset: $offset
			order: $order
			sort: $sort
		) {
			id
			details
			launch_date_local
			launch_site {
				site_name_long
			}
			launch_success
			launch_year
			links {
				flickr_images
				mission_patch
				mission_patch_small
				video_link
				wikipedia
				article_link
			}
			mission_id
			mission_name
			rocket {
				rocket_name
				rocket_type
				rocket {
					id
					name
					type
					description
					country
					company
				}
			}
		}
	}
`;
