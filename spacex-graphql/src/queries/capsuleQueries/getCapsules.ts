import { gql } from 'apollo-boost';

export const GET_CAPSULES = gql`
	query getCapsules(
		$offset: Int = 0
		$limit: Int = 3
		$order: String
		$sort: String
	) {
		capsules(limit: $limit, offset: $offset, order: $order, sort: $sort) {
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

export const GET_CAPSULES_PAST = gql`
	query getCapsulesPast(
		$offset: Int = 0
		$limit: Int = 3
		$order: String
		$sort: String
	) {
		capsulesPast(limit: $limit, offset: $offset, order: $order, sort: $sort) {
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

export const GET_CAPSULES_UPCOMING = gql`
	query getCapsulesUpcoming(
		$offset: Int = 0
		$limit: Int = 3
		$order: String
		$sort: String
	) {
		capsulesUpcoming(
			limit: $limit
			offset: $offset
			order: $order
			sort: $sort
		) {
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
