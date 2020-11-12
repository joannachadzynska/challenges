import { gql } from 'apollo-boost';

export const GET_ROCKET_DETAILS = gql`
	query getRocketDetails($id: ID!) {
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
				type
			}
			first_flight
			first_stage {
				engines
				burn_time_sec
				fuel_amount_tons
				reusable
				thrust_sea_level {
					lbf
				}
			}
			height {
				feet
			}
			mass {
				lb
			}
			id
			name
			payload_weights {
				name
				lb
				id
			}
			second_stage {
				burn_time_sec
				engines
				fuel_amount_tons
				thrust {
					lbf
				}
				payloads {
					option_1
				}
			}
			stages
			success_rate_pct
			wikipedia
			type
		}
	}
`;
