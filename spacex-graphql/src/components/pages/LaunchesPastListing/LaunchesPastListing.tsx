import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCHES } from '../../../queries/getLaunchesPast';
import { Button, boxStyles } from '../../../themes/myTheme';
import { LaunchPast } from '../../../models/launchesPast';
import styled from 'styled-components';

export interface LaunchesPastListingProps {}
const Box = styled.div`
	${boxStyles}
`;

const LaunchesPastListing: React.SFC<LaunchesPastListingProps> = () => {
	const { loading, error, data } = useQuery(GET_LAUNCHES);

	if (loading) return <h3>Loading..</h3>;
	if (error) return <p>Error...</p>;

	const getRandomImg = (images: string[]) =>
		images[Math.floor(Math.random() * images.length)];
	return (
		<>
			{' '}
			{data.launchesPast.map((launch: LaunchPast) => (
				<Box key={launch.mission_name}>
					<h1>🛰 {launch.mission_name}</h1>
					<p>{launch.details}</p>
					<img
						src={getRandomImg(launch.links.flickr_images)}
						width='200'
						alt={launch.mission_name}
					/>
					<Button>Default</Button>
					<Button variant='primary'>click me</Button>
					<Button variant='success'>click me</Button>
					<Button variant='warning'>click me</Button>
				</Box>
			))}
		</>
	);
};

export default LaunchesPastListing;
