import { gql } from 'apollo-boost';

export const GET_ROCKET_DETAILS = gql`
	query getRockets($id: ID!) {
		rocket(id: $id) {
			boosters
			company
			cost_per_launch
			country
			description
			diameter {
				feet
				meters
			}
			height {
				meters
			}
			id
			mass {
				kg
			}
			name
			payload_weights {
				kg
			}
			stages
			type
			wikipedia
			success_rate_pct
			second_stage {
				burn_time_sec
				engines
				fuel_amount_tons
			}
			first_flight
			first_stage {
				engines
				fuel_amount_tons
				burn_time_sec
				reusable
			}
			engines {
				layout
				type
				version
				number
			}
		}
	}
`;
