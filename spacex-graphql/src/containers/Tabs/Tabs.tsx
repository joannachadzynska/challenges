import { Tab } from 'components';
import * as ROUTES from 'constants/routes';
import React from 'react';

const Tabs: React.SFC = () => {
	const navLinks = [
		{ id: 1, name: 'All Missions', path: `${ROUTES.MISSIONS}` },
		{ id: 2, name: 'Latest Mission', path: `${ROUTES.MISSIONS_UPCOMING}` },
		{ id: 3, name: 'Next Mission', path: `${ROUTES.MISSIONS_NEXT}` },
		{ id: 4, name: 'Past Missions', path: `${ROUTES.MISSIONS_PAST}` },
		{ id: 5, name: 'Upcoming Missions', path: `${ROUTES.MISSIONS_UPCOMING}` },
	];

	return (
		<Tab>
			{navLinks.map((link) => (
				<Tab.TabLinkItem key={link.id} to={link.path}>
					{link.name}
				</Tab.TabLinkItem>
			))}
		</Tab>
	);
};

export default Tabs;
