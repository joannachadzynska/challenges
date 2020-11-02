import { Card } from 'components';
import { MissionCard } from 'containers/Card';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LaunchNext } from './../../../models/launches/interfaces/Launch';
import { GET_LAUNCH_NEXT } from './../../../queries/launchQueries/getLaunch';

const NextMission: React.SFC = () => {
	const { loading, error, data } = useQuery<LaunchNext>(GET_LAUNCH_NEXT);
	if (loading) return <div>Loading...</div>;
	if (error) return <p>Error...</p>;
	if (!data?.launchNext) return <p>there is not any data to display</p>;

	return (
		<section>
			<Card.Break />
			<h1>Next mission</h1>
			<Card.Break />
			<MissionCard {...data.launchNext} />
		</section>
	);
};

export default NextMission;
