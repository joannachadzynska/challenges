import { Card } from 'components';
import { LoadingIndicator } from 'components/shared';
import CardContainer from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import { Launch, Launches } from 'models/launches/interfaces/Launch';
import { GET_LAUNCHES } from 'queries/launchQueries/getLaunches';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

const AllMissions: React.SFC = () => {
	const { offset, handleOffset, ELEMENTS_LIMIT } = useInfiniteScroll(0);

	const { loading, error, data } = useQuery<Launches>(GET_LAUNCHES, {
		variables: { offset: offset, limit: ELEMENTS_LIMIT },
	});

	const [cards, setCards] = useState<Launch[]>([]);

	useEffect(() => {
		if (data?.launches.length) {
			setCards((cards) => [...cards, ...data.launches]);
		}
		return () => setCards([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.launches]);

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launches) return <p>there is not any data to display</p>;

	return (
		<div>
			<Card.Group>
				{cards.map((card) => (
					<CardContainer key={card.id} {...card} />
				))}
			</Card.Group>
			<hr />
			<button onClick={handleOffset}>Load more</button>
		</div>
	);
};

export default AllMissions;
