import { Footer, Header } from 'containers';
import React from 'react';

export interface MissionDetailsProps {}

const MissionDetails: React.SFC<MissionDetailsProps> = () => {
	return (
		<>
			<Header />
			<div>mission details</div>
			<Footer />
		</>
	);
};

export default MissionDetails;
