import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCHES_PAST } from '../../../queries/getLaunchesPast';
import { LaunchPast, LaunchesPastResult } from '../../../models/LaunchPast';
import { LaunchCard } from '../../Launches';
import { LoadingIndicator } from '../../shared';
import { Button } from '../../shared/Button/styles';

const LaunchesPastListing: React.SFC = () => {
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

	const updateCards = React.useCallback(() => {
		if (data?.launchesPast.length) {
			setCards((cards) => [...cards, ...data.launchesPast]);
		}
		return () => {
			setCards([]);
		};
	}, [data]);

	React.useEffect(() => {
		updateCards();
	}, [updateCards]);

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchesPast) return <p>there is not any data to display</p>;

	return (
		<section>
			<h2>Launches Past</h2>

			{cards.map((launch) => (
				<LaunchCard key={launch.mission_name} {...launch} />
			))}
			<Button onClick={handleOffset} variant='primary'>
				Load more
			</Button>
		</section>
	);
};

export default LaunchesPastListing;
