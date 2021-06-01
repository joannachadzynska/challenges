import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import React, { useContext } from 'react';
import { CardContext } from '../MissionsContainer';
import useInfiniteScroll from './../../../hooks/useInfiniteScroll';

const AllMissions: React.SFC = () => {
	const { currentTarget } = useContext(CardContext);
	const { isIntersecting, elementsLimit } = useInfiniteScroll(currentTarget);
	const launches = useAppSelector((state) => state.launches.launches);

	return (
		<section>
			<Card.Break />
			<h1>All missions</h1>
			<Card.Break />

			<Card.Group>
				{launches.slice(0, elementsLimit).map((launch) => (
					<CardContainer target={currentTarget} key={launch.id} {...launch} />
				))}
			</Card.Group>

			{isIntersecting && <div>Load more...</div>}
		</section>
	);
};

export default AllMissions;
