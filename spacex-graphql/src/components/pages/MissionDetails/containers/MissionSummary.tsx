import React from 'react';
import { Launch } from 'models/launches/interfaces/Launch';
import { SectionTitle } from 'styles/SectionTitle';
import { MissionDetailsCard } from '../components';

const MissionSummary: React.SFC<Launch> = (props) => (
	<section>
		<SectionTitle>mission summary</SectionTitle>
		<MissionDetailsCard {...props} />
	</section>
);

export default MissionSummary;
