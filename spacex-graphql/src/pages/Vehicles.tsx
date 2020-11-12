import { Footer, Header, VehiclesContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';
export interface VehiclesProps {}

const Vehicles: React.SFC<VehiclesProps> = () => {
	return (
		<Wrapper>
			<Header />
			<VehiclesContainer />
			<Footer />
		</Wrapper>
	);
};

export default Vehicles;
