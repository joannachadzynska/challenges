import { gql } from 'apollo-boost';

export const GET_PAYLOAD_DETAILS = gql`
	query getPayloadDetails($id: ID!) {
		payload(id: $id) {
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
