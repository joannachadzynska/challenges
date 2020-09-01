import React from 'react';

import { TabsContainer, TabLink } from './styles';

export interface TabsProps {}

const Tabs: React.SFC<TabsProps> = () => {
	return (
		<TabsContainer>
			<ul>
				<li>
					<TabLink to='/missions'>All Missions</TabLink>
				</li>
				<li>
					<TabLink to='/missions/latest'>Latest Mission</TabLink>
				</li>
				<li>
					<TabLink to='/missions/next'>Next Mission</TabLink>
				</li>
				<li>
					<TabLink to='/missions/past'>Past Missions</TabLink>
				</li>
				<li>
					<TabLink to='/missions/upcoming'>Upcoming Missions</TabLink>
				</li>
			</ul>
		</TabsContainer>
	);
};

export default Tabs;
