import { Footer, Header, VehicleDetailsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';
export interface VehicleDetailsProps {}

const VehicleDetails: React.SFC<VehicleDetailsProps> = () => {
	return (
		<Wrapper>
			<Header />
			<VehicleDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default VehicleDetails;
