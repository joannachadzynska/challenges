import { LoadingIndicator } from 'components/shared';
import { useInfiniteScroll } from 'hooks';
import { Launch, LaunchesPast } from 'models/launches/interfaces/Launch';
import { GET_LAUNCHES_PAST } from 'queries/launchQueries/getLaunches';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Button } from 'styles/Button';
import MissionCard from '../MissionCard';
import { MissionsContainer, MissionsGrid } from '../missionsStyles';

const PastMissions: React.SFC = () => {
	const { offset, handleOffset, ELEMENTS_LIMIT } = useInfiniteScroll(0);
	const { loading, error, data } = useQuery<LaunchesPast>(GET_LAUNCHES_PAST, {
		variables: { offset: offset, limit: ELEMENTS_LIMIT },
	});

	const [cards, setCards] = useState<Launch[]>([]);

	const updateCards = useCallback(() => {
		if (data?.launchesPast.length) {
			setCards((cards) => [...cards, ...data.launchesPast]);
		}
		return () => {
			setCards([]);
		};
	}, [data]);

	useEffect(() => {
		updateCards();
	}, [updateCards]);

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchesPast) return <p>there is not any data to display</p>;

	return (
		<MissionsContainer>
			<MissionsGrid>
				{cards.map((card) => (
					<MissionCard key={card.id} {...card} />
				))}
			</MissionsGrid>
			<br />
			<br />
			<Button onClick={handleOffset}>Load more</Button>
		</MissionsContainer>
	);
};

export default PastMissions;
