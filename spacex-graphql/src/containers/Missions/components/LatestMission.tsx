import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { MissionCard } from 'containers/Card';
import React from 'react';

const LatestMission: React.SFC = () => {
	const launchLatest = useAppSelector((state) => state.launches.launchLatest);

	return (
		<section>
			<Card.Break />
			<h1>Latest mission</h1>
			<Card.Break />
			<MissionCard {...launchLatest} />
		</section>
	);
};

export default LatestMission;
