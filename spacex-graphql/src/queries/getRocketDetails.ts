import { gql } from 'apollo-boost';

export const GET_ROCKET_DETAILS = gql`
	query getRocketDetails($id: ID!) {
		rocket(id: $id) {
			company
			country
			cost_per_launch
			description
			name
			type
			wikipedia
			id
		}
	}
`;
