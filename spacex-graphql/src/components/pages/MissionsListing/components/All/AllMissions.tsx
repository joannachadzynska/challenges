import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCHES } from '../../../../../queries/launchQueries/getLaunches';
import {
	Launches,
	Launch,
} from '../../../../../models/launches/interfaces/Launch';
import { LoadingIndicator } from '../../../../shared';
import { Button } from '../../../../../styles/Button';
import MissionCard from '../MissionCard';
export interface AllMissionsProps {}

const AllMissions: React.SFC<AllMissionsProps> = () => {
	const [offset, setOffset] = React.useState(0);

	const ELEMENTS_LIMIT = 10;

	const { loading, error, data } = useQuery<Launches>(GET_LAUNCHES, {
		variables: { offset: offset, limit: ELEMENTS_LIMIT },
	});

	const [cards, setCards] = React.useState<Launch[]>([]);

	const handleOffset = () =>
		setOffset((currentValue) => (currentValue += ELEMENTS_LIMIT));

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
		<div>
			<h1>All missions</h1>
			<div>
				{cards.map((card) => (
					<MissionCard key={card.id} {...card} />
				))}
			</div>
			<Button onClick={handleOffset}>Load more</Button>
		</div>
	);
};

export default AllMissions;
