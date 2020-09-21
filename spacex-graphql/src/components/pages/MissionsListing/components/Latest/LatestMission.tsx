import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LaunchLatest } from '../../../../../models/launches/interfaces/Launch';
import { GET_LAUNCH_LATEST } from '../../../../../queries/launchQueries/getLaunch';
import { LoadingIndicator } from '../../../../shared';
import { MissionDetailsCard } from '../../../MissionDetails/components';
import { SectionTitle } from '../../../MissionDetails/styles';
import DetailsButton from '../MissionCard/DetailsButton';

export interface LatestMissionProps {}

const LatestMission: React.SFC<LatestMissionProps> = () => {
	const { loading, error, data } = useQuery<LaunchLatest>(GET_LAUNCH_LATEST);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchLatest) return <p>there is not any data to display</p>;

	console.log(data.launchLatest);

	return (
		<section>
			<SectionTitle>Latest Mission</SectionTitle>
			<MissionDetailsCard {...data.launchLatest} />
			<DetailsButton {...data.launchLatest} />
		</section>
	);
};

export default LatestMission;
