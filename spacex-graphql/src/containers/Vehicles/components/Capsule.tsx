import { Vehicle } from 'components';
import React from 'react';

export interface CapsuleProps {}

const Capsule: React.SFC<CapsuleProps> = () => {
	return (
		<Vehicle.Lineup>
			<Vehicle.Name>capsule name</Vehicle.Name>

			<Vehicle>
				<Vehicle.Image src='' />
			</Vehicle>

			<Vehicle.Link to={`/vehicle/s`}>Rocket Stats</Vehicle.Link>
		</Vehicle.Lineup>
	);
};

export default Capsule;
