import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';

const LaunchSiteDetails: React.SFC = () => {
	return (
		<Wrapper>
			<Header />
			<div>Launch site details</div>
			<Footer />
		</Wrapper>
	);
};

export default LaunchSiteDetails;
