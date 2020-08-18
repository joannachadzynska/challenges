import { gql } from 'apollo-boost';

export const GET_DRAGONS = gql`
	query getDragons($limit: Int = 3, $offset: Int = 0) {
		dragons(limit: $limit, offset: $offset) {
			crew_capacity
			description
			diameter {
				feet
				meters
			}
			dry_mass_kg
			first_flight
			id
			heat_shield {
				material
			}
			name
			launch_payload_mass {
				kg
			}
			return_payload_mass {
				kg
			}
			type
			wikipedia
		}
	}
`;
