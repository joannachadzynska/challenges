import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LoadingIndicator } from 'components/shared';
import { Rockets } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKETS } from 'queries/rocketQueries/getRockets';
import { SectionTitle } from 'styles/SectionTitle';
import RocketCard from './RocketCard';

export interface RocketListingProps {}

const RocketListing: React.SFC<RocketListingProps> = () => {
	const { loading, error, data } = useQuery<Rockets>(GET_ROCKETS);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.rockets) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>list of rockets</SectionTitle>
			<div>
				{data.rockets.map((rocket) => (
					<RocketCard key={rocket.id} {...rocket} />
				))}
			</div>
		</section>
	);
};

export default RocketListing;
