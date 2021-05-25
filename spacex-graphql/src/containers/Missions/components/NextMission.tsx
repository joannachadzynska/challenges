import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { MissionCard } from 'containers/Card';
import React from 'react';

const NextMission: React.SFC = () => {
	const nextMission = useAppSelector((state) => state.launches.launchNext);

	return (
		<section>
			<Card.Break />
			<h1>Next mission</h1>
			<Card.Break />
			<MissionCard {...nextMission} />
		</section>
	);
};

export default NextMission;
