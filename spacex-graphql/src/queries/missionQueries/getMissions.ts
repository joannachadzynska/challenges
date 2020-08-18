import { gql } from 'apollo-boost';

export const GET_MISSIONS = gql`
	query getMissions($limit: Int = 3, $offset: Int = 0) {
		missions(limit: $limit, offset: $offset) {
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
