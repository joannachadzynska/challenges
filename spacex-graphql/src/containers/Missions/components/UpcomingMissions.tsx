import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import { Launch } from 'models/launches/interfaces/Launch';
import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LaunchesUpcoming } from './../../../models/launches/interfaces/Launch';
import { GET_LAUNCHES_UPCOMING } from './../../../queries/launchQueries/getLaunches';

const UpcomingMissions: React.SFC = () => {
	const [cards, setCards] = React.useState<Launch[]>([]);

	const {
		offset,

		ELEMENTS_LIMIT,
		isBottom,
		setIsBottom,
	} = useInfiniteScroll();

	const { loading, error, data } = useQuery<LaunchesUpcoming>(
		GET_LAUNCHES_UPCOMING,
		{
			variables: {
				offset: offset,
				limit: ELEMENTS_LIMIT,
				order: 'DESC',
				sort: 'launch_date_utc',
			},
		}
	);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setIsBottom(false);
		}, 2000);

		if (data?.launchesUpcoming.length) {
			setCards((cards) => [...cards, ...data.launchesUpcoming]);
		}

		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.launchesUpcoming]);

	if (loading && !isBottom) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!cards.length) return <p>there is not any data to display</p>;

	return (
		<section>
			<Card.Break />
			<h1>Upcoming missions</h1>
			<Card.Break />
			<Card.Group>
				{cards.map((card) => (
					<CardContainer key={card.id} {...card} />
				))}
			</Card.Group>
			<br />
			<br />
			{isBottom && cards.length > ELEMENTS_LIMIT && 'Loading more data'}
		</section>
	);
};

export default UpcomingMissions;
