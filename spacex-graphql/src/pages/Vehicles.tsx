import { Footer, Header, VehiclesContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const Vehicles: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<VehiclesContainer />
			<Footer />
		</Wrapper>
	);
};

export default Vehicles;
