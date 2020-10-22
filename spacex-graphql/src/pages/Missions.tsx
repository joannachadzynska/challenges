import { Footer, Header } from 'containers';
import React from 'react';
import { Wrapper } from './../styles/Wrapper';
export interface MissionsProps {}

const Missions: React.SFC<MissionsProps> = () => {
	return (
		<Wrapper>
			<Header />
			<div>missions</div>
			<Footer />
		</Wrapper>
	);
};

export default Missions;
