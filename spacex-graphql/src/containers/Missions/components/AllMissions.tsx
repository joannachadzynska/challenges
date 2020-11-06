import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import { Launch, Launches } from 'models/launches/interfaces/Launch';
import { GET_LAUNCHES } from 'queries/launchQueries/getLaunches';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

const AllMissions: React.SFC = () => {
	const [cards, setCards] = useState<Launch[]>([]);
	const onLoadMore = () => {
		fetchMore({
			variables: {
				offset: offset,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return Object.assign({}, prev, {
					cards: [...prev.launches, ...fetchMoreResult.launches],
				});
			},
		});
	};

	const {
		isBottom,
		setIsBottom,
		offset,
		handleOffset,
		ELEMENTS_LIMIT,
	} = useInfiniteScroll(onLoadMore);

	const { loading, error, data, fetchMore } = useQuery<Launches>(GET_LAUNCHES, {
		variables: {
			offset: offset,
			limit: ELEMENTS_LIMIT,
			sort: 'launch_date_local',
		},
	});

	useEffect(() => {
		if (data?.launches.length) {
			setCards((cards) => [...cards, ...data.launches]);
			setIsBottom(false);
		}
		return () => setCards([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.launches]);

	if (loading) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!cards.length) return <p>there is not any data to display</p>;

	return (
		<section>
			<Card.Break />
			<h1>All missions</h1>
			<Card.Break />

			<Card.Group>
				{cards.map((card) => (
					<CardContainer key={card.id} {...card} />
				))}
			</Card.Group>
			<hr />
			<button onClick={handleOffset}>Load more</button>
		</section>
	);
};

export default AllMissions;
