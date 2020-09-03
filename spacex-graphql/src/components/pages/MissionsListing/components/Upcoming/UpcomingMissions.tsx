import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCHES_UPCOMING } from '../../../../../queries/launchQueries/getLaunches';
import {
	LaunchesUpcoming,
	Launch,
} from '../../../../../models/launches/interfaces/Launch';
import { LoadingIndicator } from '../../../../shared';
import { Button } from '../../../../../styles/Button';
import MissionCard from '../MissionCard';
import { MissionsContainer, MissionsGrid } from '../missionsStyles';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';

const UpcomingMissions: React.SFC = () => {
	const { offset, handleOffset, ELEMENTS_LIMIT } = useInfiniteScroll(0);

	const { loading, error, data } = useQuery<LaunchesUpcoming>(
		GET_LAUNCHES_UPCOMING,
		{
			variables: { offset: offset, limit: ELEMENTS_LIMIT },
		}
	);

	const [cards, setCards] = React.useState<Launch[]>([]);

	const updateCards = React.useCallback(() => {
		if (data?.launchesUpcoming.length) {
			setCards((cards) => [...cards, ...data.launchesUpcoming]);
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
	if (!data?.launchesUpcoming) return <p>there is not any data to display</p>;

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

export default UpcomingMissions;
