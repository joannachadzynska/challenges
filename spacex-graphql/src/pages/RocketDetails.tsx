import { Footer, Header, RocketDetailsContainer } from 'containers';
import React from 'react';
import { Wrapper } from '../styles/Wrapper';
export interface VehicleDetailsProps {}

const RocketDetails: React.SFC<VehicleDetailsProps> = () => {
	return (
		<Wrapper>
			<Header />
			<RocketDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default RocketDetails;
