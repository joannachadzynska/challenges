import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import { Launch, LaunchesPast } from 'models/launches/interfaces/Launch';
import { GET_LAUNCHES_PAST } from 'queries/launchQueries/getLaunches';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

const PastMissions: React.SFC = () => {
	const [cards, setCards] = useState<Launch[]>([]);

	const { offset, ELEMENTS_LIMIT, isBottom, setIsBottom } = useInfiniteScroll(
		cards.length
	);

	const { loading, error, data } = useQuery<LaunchesPast>(GET_LAUNCHES_PAST, {
		variables: {
			offset: offset,
			limit: ELEMENTS_LIMIT,
			order: 'DESC',
			sort: 'launch_date_utc',
		},
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsBottom(false);
		}, 1000);

		if (data?.launchesPast.length) {
			setCards((cards) => [...cards, ...data.launchesPast]);
		}
		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.launchesPast]);

	if (loading && !isBottom) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!cards.length) return <p>there is not any data to display</p>;

	return (
		<section>
			<Card.Break />
			<h1>Past missions</h1>
			<Card.Break />
			<Card.Group>
				{cards.map((card) => (
					<CardContainer key={card.id} {...card} />
				))}
			</Card.Group>
			<br />
			<br />
			{isBottom &&
				cards.length >= offset + ELEMENTS_LIMIT &&
				'Loading more data'}
		</section>
	);
};

export default PastMissions;
