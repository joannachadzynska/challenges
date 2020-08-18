import { gql } from 'apollo-boost';

export const GET_LANDPADS = gql`
	query getLandpads($limit: Int = 3, $offset: Int = 0) {
		landpads(limit: $limit, offset: $offset) {
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
