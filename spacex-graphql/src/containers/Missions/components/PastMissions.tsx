import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import React, { useContext } from 'react';
import { CardContext } from '../MissionsContainer';

const PastMissions: React.SFC = () => {
	const { currentTarget } = useContext(CardContext);
	const { isIntersecting, elementsLimit } = useInfiniteScroll(currentTarget);
	const launchesPast = useAppSelector((state) => state.launches.launchesPast);
	const length = launchesPast.slice(0, elementsLimit).length;
	return (
		<section>
			<Card.Break />
			<h1>Past missions</h1>
			<Card.Break />
			<Card.Group>
				{launchesPast.slice(0, elementsLimit).map((card) => (
					<CardContainer key={card.id} {...card} />
				))}
			</Card.Group>

			{isIntersecting && length < launchesPast.length && (
				<div>Load more...</div>
			)}
		</section>
	);
};

export default PastMissions;
