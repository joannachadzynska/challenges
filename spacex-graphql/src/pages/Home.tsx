import { Footer, Header, Jumbotron } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const Home: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<Jumbotron />
			<Footer />
		</Wrapper>
	);
};

export default Home;
