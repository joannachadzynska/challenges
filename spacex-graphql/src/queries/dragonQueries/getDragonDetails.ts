import { gql } from 'apollo-boost';

export const GET_DRAGON_DETAILS = gql`
	query getDragonDetails($id: ID!) {
		dragon(id: $id) {
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
