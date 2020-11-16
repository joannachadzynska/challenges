import { Footer, Header, LandpadDetailsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const LandpadDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<LandpadDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default LandpadDetails;
