import { Vehicle } from 'components';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';

type RocketProps = Pick<RocketViewModel, 'id' | 'name' | 'type'>;

const Rocket: React.SFC<RocketProps> = ({ id, name, type }) => {
	return (
		<Vehicle.Lineup>
			<Vehicle.Name>{name}</Vehicle.Name>

			<Vehicle>
				<Vehicle.Image src={id} type={type} />
			</Vehicle>

			<Vehicle.Link to={`/vehicle/${type}/${id}`}>Rocket Stats</Vehicle.Link>
		</Vehicle.Lineup>
	);
};

export default Rocket;
