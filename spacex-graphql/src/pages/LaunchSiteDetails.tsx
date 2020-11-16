import { Footer, Header, LaunchpadDetailsContainer } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const LaunchSiteDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<LaunchpadDetailsContainer />
			<Footer />
		</Wrapper>
	);
};

export default LaunchSiteDetails;
