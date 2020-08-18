import { gql } from 'apollo-boost';

export const GET_HISTORY_DETAILS = gql`
	query getHistoryDetails($id: String) {
		history(id: $id) {
			details
			event_date_utc
			id
			title
			links {
				article
			}
			flight {
				details
				id
				launch_date_local
				launch_year
				links {
					mission_patch
					mission_patch_small
					video_link
					flickr_images
					article_link
				}
				mission_id
				mission_name
				rocket {
					rocket {
						name
						id
						type
					}
				}
			}
		}
	}
`;
