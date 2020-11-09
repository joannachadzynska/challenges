import { Vehicle } from 'components';
import React from 'react';

export interface VehicleContainerProps {}

const VehicleContainer: React.SFC<VehicleContainerProps> = (props) => {
	return <Vehicle>vehicle image</Vehicle>;
};

export default VehicleContainer;
