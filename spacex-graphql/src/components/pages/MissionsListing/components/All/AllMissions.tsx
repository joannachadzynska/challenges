import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { LoadingIndicator } from 'components/shared';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { Launches, Launch } from 'models/launches/interfaces/Launch';
import { GET_LAUNCHES } from 'queries/launchQueries/getLaunches';

import { Button } from 'styles/Button';
import MissionCard from '../MissionCard';
import { MissionsContainer, MissionsGrid } from '../missionsStyles';

const AllMissions: React.SFC = () => {
	const { offset, handleOffset, ELEMENTS_LIMIT } = useInfiniteScroll(0);

	const { loading, error, data } = useQuery<Launches>(GET_LAUNCHES, {
		variables: { offset: offset, limit: ELEMENTS_LIMIT },
	});

	const [cards, setCards] = React.useState<Launch[]>([]);

	const updateCards = React.useCallback(() => {
		if (data?.launches.length) {
			setCards((cards) => [...cards, ...data.launches]);
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
	if (!data?.launches) return <p>there is not any data to display</p>;

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

export default AllMissions;
