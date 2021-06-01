import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import * as React from 'react';
import { CardContext } from '../MissionsContainer';

const UpcomingMissions: React.SFC = () => {
	const { currentTarget } = React.useContext(CardContext);
	const { isIntersecting, elementsLimit } = useInfiniteScroll(currentTarget);
	const launchesUpcoming = useAppSelector(
		(state) => state.launches.launchesUpcoming
	);
	const length = launchesUpcoming.slice(0, elementsLimit).length;

	return (
		<section>
			<Card.Break />
			<h1>Upcoming missions</h1>
			<Card.Break />
			<Card.Group>
				{launchesUpcoming.slice(0, elementsLimit).map((card) => (
					<CardContainer key={card.id} {...card} />
				))}
			</Card.Group>
			{isIntersecting && length < launchesUpcoming.length && (
				<div>Load more...</div>
			)}
		</section>
	);
};

export default UpcomingMissions;
