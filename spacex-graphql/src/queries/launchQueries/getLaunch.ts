import { gql } from 'apollo-boost';

export const GET_LAUNCH_DETAILS = gql`
	query getLaunchDetails($id: ID!) {
		launch(id: $id) {
			details
			id
			launch_date_local
			launch_date_utc
			launch_site {
				site_name_long
			}
			launch_success
			launch_year
			links {
				flickr_images
				article_link
				mission_patch
				mission_patch_small
				video_link
				wikipedia
			}
			mission_id
			mission_name
			rocket {
				first_stage {
					cores {
						flight
						reused
						land_success
						landing_intent
						landing_vehicle
						landing_type
					}
				}
				rocket_type
				rocket_name
				rocket {
					id
				}
				second_stage {
					payloads {
						nationality
						customers
						payload_type
						manufacturer
						orbit
						payload_mass_lbs
						id
					}
				}
			}
			ships {
				image
				id
				name
				model
				url
				weight_kg
				year_built
				successful_landings
				type
				status
				speed_kn
				roles
			}
		}
	}
`;

export const GET_LAUNCH_LATEST = gql`
	query getLaunchLatest($offset: Int = 0) {
		launchLatest(offset: $offset) {
			details
			id
			launch_date_local
			launch_date_utc
			launch_site {
				site_name_long
			}
			launch_success
			launch_year
			links {
				flickr_images
				article_link
				mission_patch
				mission_patch_small
				video_link
				wikipedia
			}
			mission_id
			mission_name
			rocket {
				rocket_type
				rocket_name
			}
			ships {
				image
				id
				name
				model
				url
				weight_kg
				year_built
				successful_landings
				type
				status
				speed_kn
				roles
			}
		}
	}
`;
export const GET_LAUNCH_NEXT = gql`
	query getLaunchNext($offset: Int = 0) {
		launchNext(offset: $offset) {
			details
			id
			launch_date_local
			launch_date_utc
			launch_site {
				site_name_long
			}
			launch_success
			launch_year
			links {
				flickr_images
				article_link
				mission_patch
				mission_patch_small
				video_link
				wikipedia
			}
			mission_id
			mission_name
			rocket {
				rocket_type
				rocket_name
			}
			ships {
				image
				id
				name
				model
				url
				weight_kg
				year_built
				successful_landings
				type
				status
				speed_kn
				roles
			}
		}
	}
`;
