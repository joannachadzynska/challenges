import { Footer, Header, MissionDetailsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const MissionDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<MissionDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default MissionDetails;
