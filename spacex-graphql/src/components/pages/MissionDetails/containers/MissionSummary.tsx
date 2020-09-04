import React from 'react';
import { MissionDetailsCard } from '../components';
import { SectionTitle } from '../styles';
import { Launch } from '../../../../models/launches/interfaces/Launch';

const MissionSummary: React.SFC<Launch> = (props) => (
	<section>
		<SectionTitle>mission summary</SectionTitle>
		<MissionDetailsCard {...props} />
	</section>
);

export default MissionSummary;
