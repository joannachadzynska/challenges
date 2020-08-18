import { gql } from 'apollo-boost';

export const GET_LANDPAD_DETAILS = gql`
	query getLandpadDetails($id: ID!) {
		landpad(id: $id) {
			status
			landing_type
			location {
				name
				region
			}
			attempted_landings
			details
			full_name
			id
			successful_landings
			wikipedia
		}
	}
`;
