import { Footer, Header } from 'containers';
import React from 'react';
export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
	return (
		<>
			<Header />
			<div>about</div>
			<Footer />
		</>
	);
};

export default About;
