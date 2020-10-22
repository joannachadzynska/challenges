import { Footer, Header } from 'containers';
import React from 'react';
export interface VehiclesProps {}

const Vehicles: React.SFC<VehiclesProps> = () => {
	return (
		<>
			<Header />
			<div>vehicles</div>
			<Footer />
		</>
	);
};

export default Vehicles;
