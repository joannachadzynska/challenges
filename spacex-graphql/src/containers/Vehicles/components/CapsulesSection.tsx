import { Vehicle } from 'components';
import { LoadingIndicator } from 'components/shared';
import { Capsules } from 'models/capsules/interfaces/Capsule';
import { GET_CAPSULES } from 'queries/capsuleQueries/getCapsules';
import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SectionTitle } from 'styles/SectionTitle';
import Capsule from './Capsule';

const CapsulesSection: React.SFC = () => {
	const { loading, error, data } = useQuery<Capsules>(GET_CAPSULES);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.capsules) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>Capsules</SectionTitle>
			<Vehicle.Description>
				The rockets below are the past, current and yet to be active vehicles in
				the SpaceX lineup. The proportion of the rockets are approximate but
				somewhat accurate in their relative scale. As vehicles become available,
				they will be added here for reference.
			</Vehicle.Description>
			<Vehicle.Group>
				{data.capsules.map((capsule) => (
					<Capsule key={capsule.id} {...capsule} />
				))}
			</Vehicle.Group>
		</section>
	);
};

export default CapsulesSection;
