import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CardContext } from '../MissionsContainer';

const AllMissions: React.SFC = () => {
	const { currentTarget } = useContext(CardContext);
	const launches = useAppSelector((state) => state.launches.launches);

	const [isIntersecting, setIsIntersecting] = useState(false);
	const [elementLimit, setElementLimit] = useState(10);

	const scrollObserver = useCallback((entries: any) => {
		const target = entries[0];

		if (target.isIntersecting) {
			setIsIntersecting(true);
			setTimeout(() => {
				setElementLimit((prev) => (prev += 10));
			}, 1000);
		} else {
			setIsIntersecting(false);
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(scrollObserver, {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		});

		if (currentTarget && currentTarget.current) {
			observer.observe(currentTarget.current);
		}
		return () => observer.disconnect();
	}, [currentTarget, scrollObserver]);

	return (
		<section>
			<Card.Break />
			<h1>All missions</h1>
			<Card.Break />

			<Card.Group>
				{launches.slice(0, elementLimit).map((launch) => (
					<CardContainer target={currentTarget} key={launch.id} {...launch} />
				))}
			</Card.Group>

			{isIntersecting && <div>Load more...</div>}
		</section>
	);
};

export default AllMissions;
