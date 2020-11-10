import { Vehicle } from 'components';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';

type VehicleContainerProps = Pick<LaunchViewModel, 'rocket'>;

const VehicleContainer: React.SFC<VehicleContainerProps> = ({ rocket }) => {
	return (
		<Vehicle>
			<Vehicle.Image src={rocket.rocket.id} />
		</Vehicle>
	);
};

export default VehicleContainer;
