import { Footer, Header, RocketDetailsContainer } from 'containers';
import React from 'react';
import { Wrapper } from '../styles/Wrapper';

const RocketDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<RocketDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default RocketDetails;
