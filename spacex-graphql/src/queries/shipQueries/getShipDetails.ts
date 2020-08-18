import { gql } from 'apollo-boost';

export const GET_SHIP_DETAILS = gql`
	query getShipDetails($id: ID!) {
		ship(id: $id) {
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
                position {
                latitude
                longitude
                }
                roles
                speed_kn
                status
                successful_landings
                type
                weight_kg
                year_built
            }
		}
	}
`;
