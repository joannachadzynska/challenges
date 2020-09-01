import React from 'react';
import { Tabs, Routing } from './components';

export interface MissionsListingProps {}

const MissionsListing: React.SFC<MissionsListingProps> = () => {
	return (
		<div>
			<Tabs />
			<Routing />
		</div>
	);
};

export default MissionsListing;
