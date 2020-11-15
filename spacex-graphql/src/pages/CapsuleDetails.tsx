import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from 'styles/Wrapper';

const CapsuleDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>capsule details</div>
			<Footer />
		</Wrapper>
	);
};

export default CapsuleDetails;
