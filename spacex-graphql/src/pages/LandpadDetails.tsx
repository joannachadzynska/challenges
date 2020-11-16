import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const LandpadDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>landpad details</div>
			<Footer />
		</Wrapper>
	);
};

export default LandpadDetails;
