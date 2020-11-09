import { Launch } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_DETAILS } from 'queries/launchQueries/getLaunch';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';
import { Images, Links, Summary } from './components';

export interface MissionDetailsContainerProps {}

type GraphQlResponse = {
	launch: Launch;
};

const MissionDetailsContainer: React.SFC<MissionDetailsContainerProps> = () => {
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
		<div>
			<Summary {...data.launch} />
			<Images {...data.launch} />
			<Links {...data.launch} />
		</div>
	);
};

export default MissionDetailsContainer;
