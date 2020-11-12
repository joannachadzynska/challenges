import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';
export interface VehicleDetailsProps {}

const VehicleDetails: React.SFC<VehicleDetailsProps> = () => {
	return (
		<Wrapper>
			<Header />
			<div>vehicle details</div>
			<Footer />
		</Wrapper>
	);
};

export default VehicleDetails;
