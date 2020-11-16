import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const Landpads: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>landpads listing</div>
			<Footer />
		</Wrapper>
	);
};

export default Landpads;
