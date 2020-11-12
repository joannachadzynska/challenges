import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';
export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
	return (
		<Wrapper>
			<Header />
			<div>about</div>
			<Footer />
		</Wrapper>
	);
};

export default About;
