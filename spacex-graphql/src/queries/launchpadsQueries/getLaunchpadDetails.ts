import { gql } from 'apollo-boost';

export const GET_LAUNCHPAD_DETAILS = gql`
	query getLaunchpadsDetails($id: ID!) {
		launchpad(is: $id) {
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
