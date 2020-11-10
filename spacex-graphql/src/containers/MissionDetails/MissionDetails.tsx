import { Launch } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_DETAILS } from 'queries/launchQueries/getLaunch';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';
import { Wrapper } from 'styles/Wrapper';
import { Images, Links, MissionData, Summary, Video } from './components';

type GraphQlResponse = {
	launch: Launch;
};

const MissionDetailsContainer: React.SFC = () => {
	const { id } = useParams<{ id: string }>();
	const [details, setDetails] = useState<Launch>();
	const { loading, error, data } = useQuery<GraphQlResponse>(
		GET_LAUNCH_DETAILS,
		{
			variables: {
				id: id,
			},
		}
	);

	useEffect(() => {
		if (data?.launch) {
			setDetails({ ...details, ...data.launch });
		}
		return () => setDetails(details);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	if (loading) return <div>loading ...</div>;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.launch) return <p>There is no data to display</p>;

	return (
		<Wrapper>
			<Video {...data.launch} />
			<Summary {...data.launch} />
			<MissionData {...data.launch} />
			<Images {...data.launch} />
			<Links {...data.launch} />
		</Wrapper>
	);
};

export default MissionDetailsContainer;
