import { Vehicle } from 'components';
import React from 'react';
import { DragonViewModel } from './../../../models/dragons/viewModels/DragonViewModel';

type DragonProps = Pick<DragonViewModel, 'id' | 'name' | 'type'>;

const Dragon: React.SFC<DragonProps> = ({ id, name, type }) => {
	return (
		<Vehicle.Lineup>
			<Vehicle.Name>{name}</Vehicle.Name>

			<Vehicle>
				<Vehicle.Image src={id} type={type} />
			</Vehicle>

			<Vehicle.Link to={`/vehicle/dragon/${id}`}>Dragon Details</Vehicle.Link>
		</Vehicle.Lineup>
	);
};

export default Dragon;
