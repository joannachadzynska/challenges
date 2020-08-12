import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { GET_ROCKET_DETAILS } from '../../../queries/getRocketDetails';
import { Rocket } from '../../../models/Rocket';
import { LoadingIndicator } from '../../shared';
import { RocketName, RocketCountry, RocketDescription } from '../../Rockets';

interface GraphQlResult {
	rocket: Required<Rocket>;
}

const RocketDetails: React.SFC = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery<GraphQlResult>(GET_ROCKET_DETAILS, {
		variables: {
			id: id,
		},
	});

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.rocket) return <p>There is no data to display</p>;

	return (
		<div>
			<RocketName {...data.rocket} />
			<RocketCountry {...data.rocket} />
			<RocketDescription {...data.rocket} />
		</div>
	);
};

export default RocketDetails;
