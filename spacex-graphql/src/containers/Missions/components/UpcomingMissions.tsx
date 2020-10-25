import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import { Launch } from 'models/launches/interfaces/Launch';
import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LaunchesUpcoming } from './../../../models/launches/interfaces/Launch';
import { GET_LAUNCHES_UPCOMING } from './../../../queries/launchQueries/getLaunches';

export interface UpcomingMissionsProps {}

const UpcomingMissions: React.SFC<UpcomingMissionsProps> = () => {
	const { offset, handleOffset, ELEMENTS_LIMIT } = useInfiniteScroll(0);
	const { loading, error, data } = useQuery<LaunchesUpcoming>(
		GET_LAUNCHES_UPCOMING,
		{
			variables: { offset: offset, limit: ELEMENTS_LIMIT },
		}
	);

	const [cards, setCards] = React.useState<Launch[]>([]);

	React.useEffect(() => {
		if (data?.launchesUpcoming.length) {
			setCards((cards) => [...cards, ...data.launchesUpcoming]);
		}
		return () => setCards([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.launchesUpcoming]);

	if (loading) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!data?.launchesUpcoming) return <p>there is not any data to display</p>;
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

export default UpcomingMissions;
