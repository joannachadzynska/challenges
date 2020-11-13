import { Vehicle } from 'components';
import { LoadingIndicator } from 'components/shared';
import { Rockets } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKETS } from 'queries/rocketQueries/getRockets';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SectionTitle } from 'styles/SectionTitle';
import Rocket from './Rocket';

const RocketsSection: React.SFC = () => {
	const { loading, error, data } = useQuery<Rockets>(GET_ROCKETS);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.rockets) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>Rockets</SectionTitle>
			<Vehicle.Description>
				The rockets below are the past, current and yet to be active vehicles in
				the SpaceX lineup. The proportion of the rockets are approximate but
				somewhat accurate in their relative scale. As vehicles become available,
				they will be added here for reference.
			</Vehicle.Description>

			<Vehicle.Group>
				{data.rockets.map((rocket) => (
					<Rocket key={rocket.id} {...rocket} />
				))}
			</Vehicle.Group>
		</section>
	);
};

export default RocketsSection;
