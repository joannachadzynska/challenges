import { Footer, Header, LaunchpadsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const LaunchSites: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<LaunchpadsContainer />
			<Footer />
		</Wrapper>
	);
};

export default LaunchSites;
