import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCH_LATEST } from 'queries/launchQueries/getLaunch';
import { LaunchLatest } from 'models/launches/interfaces/Launch';
import { MissionDetailsCard } from 'components/pages/MissionDetails/components';
import { LoadingIndicator } from 'components/shared';
import { ViewDetailsButton } from './style';
import { SectionTitle } from 'styles/SectionTitle';
import { DetailsButton } from '../MissionCard/components';

const LatestMission: React.SFC = () => {
	const { loading, error, data } = useQuery<LaunchLatest>(GET_LAUNCH_LATEST);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchLatest) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>Latest Mission</SectionTitle>
			<MissionDetailsCard {...data.launchLatest} />

			<ViewDetailsButton>
				<DetailsButton {...data.launchLatest} />
			</ViewDetailsButton>
		</section>
	);
};

export default LatestMission;
