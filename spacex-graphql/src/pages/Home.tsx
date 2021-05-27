import { Footer, Header, Jumbotron } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const Home: React.SFC = () => {
	return (
		<div
			style={{
				background: 'url(/images/bg/bg1.jpg) center center / cover no-repeat',
				width: '100%',
				height: '100%',
			}}>
			<Wrapper>
				<Header />
				<Jumbotron />
				<Footer />
			</Wrapper>
		</div>
	);
};

export default Home;
