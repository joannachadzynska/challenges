import { gql } from 'apollo-boost';

export const GET_CAPSULE_DETAILS = gql`
	query getCapsuleDetails($offset: String) {
		capsule(id: $id) {
			id
			landings
			missions {
				name
				flight
			}
			original_launch
			reuse_count
			status
			type
			dragon {
				description
				first_flight
				id
				name
				type
				wikipedia
				crew_capacity
			}
		}
	}
`;
