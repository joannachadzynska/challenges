import { gql } from 'apollo-boost';

export const GET_LAUNCHES = gql`
	{
		launchesPast {
			mission_name
			details
			links {
				flickr_images
			}
		}
	}
`;
