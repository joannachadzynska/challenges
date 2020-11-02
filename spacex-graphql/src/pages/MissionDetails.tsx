import { Footer, Header } from 'containers';
import { Launch } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_DETAILS } from 'queries/launchQueries/getLaunch';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';

type GraphQlResponse = {
	launch: Launch;
};

const MissionDetails: React.SFC = () => {
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

	console.log(data.launch);

	return (
		<>
			<Header />
			<section>mission details</section>
			<Footer />
		</>
	);
};

export default MissionDetails;
