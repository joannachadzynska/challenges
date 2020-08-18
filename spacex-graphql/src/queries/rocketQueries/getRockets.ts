import { gql } from 'apollo-boost';

export const GET_ROCKETS = gql`
	query getRockets($limit: Int = 3, $offset: Int = 0) {
		rockets(offset: $offset, limit: $limit) {
			company
			cost_per_launch
			country
			description
			id
			name
			type
			wikipedia
		}
	}
`;
