import { Footer, Header } from 'containers';
import React from 'react';
export interface VehicleDetailsProps {}

const VehicleDetails: React.SFC<VehicleDetailsProps> = () => {
	return (
		<>
			<Header />
			<div>vehicle details</div>;
			<Footer />
		</>
	);
};

export default VehicleDetails;
