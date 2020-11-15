import { gql } from 'apollo-boost';

export const GET_ROCKETS = gql`
	query getRockets {
		rockets {
			active
			description
			diameter {
				feet
			}
			first_flight
			id
			name
			type
		}
	}
`;
