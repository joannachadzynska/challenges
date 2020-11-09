import { Footer, Header, VehiclesContainer } from 'containers';
import React from 'react';
export interface VehiclesProps {}

const Vehicles: React.SFC<VehiclesProps> = () => {
	return (
		<>
			<Header />
			<VehiclesContainer />
			<Footer />
		</>
	);
};

export default Vehicles;
