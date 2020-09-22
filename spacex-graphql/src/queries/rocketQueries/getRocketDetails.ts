import { gql } from 'apollo-boost';

export const GET_ROCKET_DETAILS = gql`
	query getRockets($id: ID!) {
		rocket(id: $id) {
			active
			boosters
			company
			cost_per_launch
			country
			description
			diameter {
				feet
			}
			engines {
				layout
				number
				thrust_sea_level {
					lbf
				}
				thrust_vacuum {
					lbf
				}
				type
			}
			first_flight
			first_stage {
				burn_time_sec
				engines
				reusable
			}
			height {
				feet
			}
			id
			mass {
				lb
			}
			name
			payload_weights {
				name
				lb
			}
			second_stage {
				burn_time_sec
				engines
			}
			stages
			success_rate_pct
			wikipedia
		}
	}
`;
