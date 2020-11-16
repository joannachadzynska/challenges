import { Footer, Header, LandpadsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const Landpads: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<LandpadsContainer />
			<Footer />
		</Wrapper>
	);
};

export default Landpads;
