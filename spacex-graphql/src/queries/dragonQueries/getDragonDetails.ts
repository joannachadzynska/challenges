import { gql } from 'apollo-boost';

export const GET_DRAGON_DETAILS = gql`
	query getDragonDetails($id: ID!) {
		dragon(id: $id) {
			active
			crew_capacity
			description
			diameter {
				feet
			}
			dry_mass_lb
			first_flight
			id
			heat_shield {
				material
			}
			height_w_trunk {
				feet
			}
			name
			launch_payload_mass {
				lb
			}
			return_payload_mass {
				lb
			}
			thrusters {
				amount
				fuel_1
				fuel_2
				pods
				thrust {
					lbf
				}
				type
			}
			trunk {
				trunk_volume {
					cubic_feet
				}
			}
			type
			wikipedia
		}
	}
`;
