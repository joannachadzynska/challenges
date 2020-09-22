import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { LoadingIndicator } from 'components/shared';
import { Launch } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_DETAILS } from 'queries/launchQueries/getLaunch';
import { MissionSummary, MissionImages, MissionLinks } from './containers';

type GraphQlResponse = {
	launch: Launch;
};

const MissionDetails: React.SFC = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery<GraphQlResponse>(
		GET_LAUNCH_DETAILS,
		{
			variables: {
				id: id,
			},
		}
	);

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.launch) return <p>There is no data to display</p>;

	return (
		<div>
			<MissionSummary {...data.launch} />
			<MissionImages {...data.launch} />
			<MissionLinks {...data.launch} />
		</div>
	);
};

export default MissionDetails;
