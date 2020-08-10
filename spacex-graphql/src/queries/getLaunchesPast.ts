import { gql } from 'apollo-boost';

export const GET_LAUNCHES_PAST = gql`
	query getLaunchesPast($offset: Int = 0, $limit: Int = 3) {
		launchesPast(limit: $limit, offset: $offset) {
			details
			id

			launch_date_local
			launch_site {
				site_name_long
			}
			mission_id
			mission_name
			links {
				article_link
				video_link
				flickr_images
				mission_patch
				wikipedia
			}
			rocket {
				rocket_name
				rocket_type
				rocket {
					id
					name
					type
					country
					company
					description
				}
			}
		}
	}
`;
