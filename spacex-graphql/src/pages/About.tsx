import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const About: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>about</div>
			<Footer />
		</Wrapper>
	);
};

export default About;
