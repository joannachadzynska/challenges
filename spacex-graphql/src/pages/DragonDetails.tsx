import { DragonDetailsContainer, Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from 'styles/Wrapper';

const DragonDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<DragonDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default DragonDetails;
