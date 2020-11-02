import { Card } from 'components';
import { MissionCard } from 'containers/Card';
import { LaunchLatest } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_LATEST } from 'queries/launchQueries/getLaunch';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';

const LatestMission: React.SFC = () => {
	const { loading, error, data } = useQuery<LaunchLatest>(GET_LAUNCH_LATEST);
	if (loading) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!data?.launchLatest) return <p>there is not any data to display</p>;

	return (
		<section>
			<Card.Break />
			<h1>Latest mission</h1>
			<Card.Break />
			<MissionCard {...data.launchLatest} />
		</section>
	);
};

export default LatestMission;
