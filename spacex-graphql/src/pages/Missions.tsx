import { Footer, Header, MissionsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const Missions: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<MissionsContainer />
			<Footer />
		</Wrapper>
	);
};

export default Missions;
