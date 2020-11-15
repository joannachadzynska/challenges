import { Vehicle } from 'components';
import * as React from 'react';
import { SectionTitle } from 'styles/SectionTitle';
export interface DragonsSectionProps {}

const DragonsSection: React.SFC<DragonsSectionProps> = () => {
	return (
		<section>
			<SectionTitle>Capsules</SectionTitle>
			<Vehicle.Description>
				The rockets below are the past, current and yet to be active vehicles in
				the SpaceX lineup. The proportion of the rockets are approximate but
				somewhat accurate in their relative scale. As vehicles become available,
				they will be added here for reference.
			</Vehicle.Description>
		</section>
	);
};

export default DragonsSection;
