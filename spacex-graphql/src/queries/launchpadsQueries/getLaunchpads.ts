import { gql } from 'apollo-boost';

export const GET_LAUNCHPADS = gql`
	query getLaunchpads($limit: Int = 3, $offset: Int = 0) {
		launchpads(limit: $limit, offset: $offset) {
			attempted_launches
			details
			id
			location {
				name
				region
			}
			name
			status
			successful_launches
			wikipedia
			vehicles_launched {
				id
				name
				country
				company
				type
				wikipedia
			}
		}
	}
`;
