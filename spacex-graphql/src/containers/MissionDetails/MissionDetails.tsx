import { Launch } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_DETAILS } from 'queries/launchQueries/getLaunch';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';
import { Wrapper } from 'styles/Wrapper';
import {
	Details,
	Images,
	Links,
	MissionData,
	Summary,
	Video,
} from './components';

type GraphQlResponse = {
	launch: Launch;
};

const MissionDetailsContainer: React.SFC = () => {
	const { id } = useParams<{ id: string }>();

	const { loading, error, data } = useQuery<GraphQlResponse>(
		GET_LAUNCH_DETAILS,
		{
			variables: {
				id: id,
			},
		}
	);

	if (loading) return <div>loading ...</div>;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.launch) return <p>There is no data to display</p>;

	return (
		<Wrapper>
			<Video {...data.launch} />
			<Summary {...data.launch} />
			<Details {...data.launch} />
			<MissionData {...data.launch} />
			<Images {...data.launch} />
			<Links {...data.launch} />
		</Wrapper>
	);
};

export default MissionDetailsContainer;
