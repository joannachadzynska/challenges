import { Vehicle } from 'components';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';

type RocketProps = Pick<RocketViewModel, 'id' | 'name'>;

const Rocket: React.SFC<RocketProps> = ({ id, name }) => {
	return (
		<Vehicle.Lineup key={id}>
			<Vehicle.Name>{name}</Vehicle.Name>

			<Vehicle>
				<Vehicle.Image src={id} />
			</Vehicle>

			<Vehicle.Link to={`/vehicle/${id}`}>Rocket Stats</Vehicle.Link>
		</Vehicle.Lineup>
	);
};

export default Rocket;
