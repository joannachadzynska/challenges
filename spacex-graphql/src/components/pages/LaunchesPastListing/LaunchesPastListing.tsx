import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCHES_PAST } from '../../../queries/getLaunchesPast';
import { LaunchPast, LaunchesPastResult } from '../../../models/LaunchPast';
import { LaunchCard } from '../../Launches';
import { Button, boxStyles } from '../../../themes/myTheme';
import styled from 'styled-components';

export interface LaunchesPastListingProps {}

const Box = styled.div`
	${boxStyles}
`;

const LaunchesPastListing: React.SFC<LaunchesPastListingProps> = () => {
	const [offset, setOffset] = React.useState(0);

	const ELEMENTS_LIMIT = 10;
	const { loading, error, data } = useQuery<LaunchesPastResult>(
		GET_LAUNCHES_PAST,
		{
			variables: { offset: offset, limit: ELEMENTS_LIMIT },
		}
	);

	const [cards, setCards] = React.useState<LaunchPast[]>([]);

	const handleOffset = () =>
		setOffset((currentValue) => (currentValue += ELEMENTS_LIMIT));

	React.useEffect(() => {
		if (data?.launchesPast.length) {
			setCards([...cards, ...data.launchesPast]);
		}
		return () => {
			console.log('clean');
		};
	}, [data, cards]);

	if (loading) return <h3>Loading..</h3>;
	if (error) return <p>Error...</p>;
	if (!data?.launchesPast) return <p>there is not any data to display</p>;

	// const getRandomImg = (images: string[]) =>
	// 	images[Math.floor(Math.random() * images.length)];

	return (
		<section>
			<h2>Launches Past</h2>
			{/* {data.launchesPast.map((launch: LaunchPast) => (
				<Box key={launch.id}>
					<h1>🛰 {launch.mission_name}</h1>
					<p>{launch.details}</p>
					<img
						src={getRandomImg(launch.links.flickr_images)}
						width='200'
						alt={launch.mission_name}
					/>
					<Button variant='primary'>Details</Button>
				</Box>
			))} */}
			{cards.map((launch) => (
				<LaunchCard key={launch.id} {...launch} />
			))}
			<Button onClick={handleOffset} variant='primary'>
				Load more
			</Button>
		</section>
	);
};

export default LaunchesPastListing;
