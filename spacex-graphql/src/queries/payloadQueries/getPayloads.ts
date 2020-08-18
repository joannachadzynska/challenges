import { gql } from 'apollo-boost';

export const GET_PAYLOADS = gql`
	query getPayloads($sort: String, order: String, $offset: Int = 0, $limit: Int = 3) {
		payloads(sort: $sort, order: $order, offset: $offset, limit: $limit) {
			customers
			id
			manufacturer
			nationality
			payload_mass_kg
			payload_type
			reused
		}
	}
`;
