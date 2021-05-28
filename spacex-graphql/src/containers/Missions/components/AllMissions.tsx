import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { useInfiniteScroll } from 'hooks';
import React, { useRef, useState } from 'react';

const AllMissions: React.SFC = () => {
	const target = useRef(null);
	const launches = useAppSelector((state) => state.launches.launches);

	const [offset, setPageOffset] = useState(0);
	const [elementLimit, setElementLimit] = useState(10);

	useInfiniteScroll(target);

	return (
		<section>
			<Card.Break />
			<h1>All missions</h1>
			<Card.Break />

			<Card.Group target={target}>
				{launches.slice(offset, elementLimit).map((launch) => (
					<CardContainer key={launch.id} {...launch} />
				))}
			</Card.Group>
		</section>
	);
};

export default AllMissions;
