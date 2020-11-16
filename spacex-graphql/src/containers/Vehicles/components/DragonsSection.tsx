import { Vehicle } from 'components';
import { LoadingIndicator } from 'components/shared';
import { GET_DRAGONS } from 'queries/dragonQueries/getDragons';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SectionTitle } from 'styles/SectionTitle';
import { Dragons } from './../../../models/dragons/interfaces/Dragon';
import Dragon from './Dragon';

export interface DragonsSectionProps {}

const DragonsSection: React.SFC<DragonsSectionProps> = () => {
	const { loading, error, data } = useQuery<Dragons>(GET_DRAGONS);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.dragons) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>Dragons</SectionTitle>
			<Vehicle.Description>
				{/* The rockets below are the past, current and yet to be active vehicles in
				the SpaceX lineup. The proportion of the rockets are approximate but
				somewhat accurate in their relative scale. As vehicles become available,
				they will be added here for reference. */}
			</Vehicle.Description>

			<Vehicle.Group>
				{data.dragons.map((dragon) => (
					<Dragon key={dragon.id} {...dragon} />
				))}
			</Vehicle.Group>
		</section>
	);
};

export default DragonsSection;
