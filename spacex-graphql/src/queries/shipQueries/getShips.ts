import { gql } from 'apollo-boost';

export const GET_SHIPS = gql`
	query getShips($sort: String, order: String, $offset: Int = 0, $limit: Int = 3) {
		ships(sort: $sort, order: $order, offset: $offset, limit: $limit) {
                attempted_landings
                home_port
                active
                id
                image
                missions {
                flight
                name
                }
                model
                name
                url
                year_built
            }
		}
	}
`;
