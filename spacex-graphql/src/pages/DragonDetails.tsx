import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from 'styles/Wrapper';

export interface DragonDetailsProps {}

const DragonDetails: React.SFC<DragonDetailsProps> = () => {
	return (
		<Wrapper>
			<Header />
			<div>dragon details</div>
			<Footer />
		</Wrapper>
	);
};

export default DragonDetails;
