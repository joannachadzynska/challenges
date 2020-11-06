import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import { Launch, LaunchesPast } from 'models/launches/interfaces/Launch';
import { GET_LAUNCHES_PAST } from 'queries/launchQueries/getLaunches';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

const PastMissions: React.SFC = () => {
	const { offset, handleOffset, ELEMENTS_LIMIT } = useInfiniteScroll();
	const { loading, error, data } = useQuery<LaunchesPast>(GET_LAUNCHES_PAST, {
		variables: { offset: offset, limit: ELEMENTS_LIMIT },
	});

	const [cards, setCards] = useState<Launch[]>([]);

	useEffect(() => {
		if (data?.launchesPast.length) {
			setCards((cards) => [...cards, ...data.launchesPast]);
		}
		return () => setCards([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.launchesPast]);

	if (loading) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!data?.launchesPast) return <p>there is not any data to display</p>;

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
			<hr />
			<button onClick={handleOffset}>Load more</button>
		</section>
	);
};

export default PastMissions;
