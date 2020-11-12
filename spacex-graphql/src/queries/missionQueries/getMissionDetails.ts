import { gql } from 'apollo-boost';

export const GET_MISSION_DETAILS = gql`
	query getMissionDetails($id: ID!) {
		mission(id: $id) {
			description
			id
			manufacturers
			name
			twitter
			website
			wikipedia
			payloads {
				id
				manufacturer
				nationality
				reused
			}
		}
	}
`;
