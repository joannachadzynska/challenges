import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { MissionDetailsCard } from 'components/pages/MissionDetails/components';
import { SectionTitle } from 'components/pages/MissionDetails/styles';
import { LoadingIndicator } from 'components/shared';
import { LaunchNext } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_NEXT } from 'queries/launchQueries/getLaunch';

import DetailsButton from '../MissionCard/DetailsButton';

export interface NextMissionProps {}

const NextMission: React.SFC<NextMissionProps> = () => {
	const { loading, error, data } = useQuery<LaunchNext>(GET_LAUNCH_NEXT);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchNext) return <p>there is not any data to display</p>;

	console.log(data.launchNext);
	return (
		<section>
			<SectionTitle>Next Mission</SectionTitle>
			<MissionDetailsCard {...data.launchNext} />
			<DetailsButton {...data.launchNext} />
		</section>
	);
};

export default NextMission;
