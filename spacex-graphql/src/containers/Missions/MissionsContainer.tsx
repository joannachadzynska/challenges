import { Tabs } from 'containers';
import React from 'react';
import Routing from './routing';

export interface MissionsContainerProps {}

const MissionsContainer: React.SFC<MissionsContainerProps> = () => {
	return (
		<div>
			<Tabs />
			<Routing />
		</div>
	);
};

export default MissionsContainer;
