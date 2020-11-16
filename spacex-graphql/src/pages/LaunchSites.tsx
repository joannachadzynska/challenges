import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const LaunchSites: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>Launch sites listing</div>
			<Footer />
		</Wrapper>
	);
};

export default LaunchSites;
