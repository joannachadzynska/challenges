import { Header } from 'components';
import React from 'react';

const HeaderMenu: React.SFC = () => {
	const links = [
		{ id: 'launches', path: '/missions', name: 'Missions' },
		{ id: 'rockets', path: '/vehicles', name: 'Vehicles' },
		{ id: 'about', path: '/about', name: 'About' },
	];

	return (
		<Header.Menu>
			<Header.Group>
				{links.map((link) => (
					<Header.MenuItem key={link.id} to={link.path}>
						{link.name}
					</Header.MenuItem>
				))}
			</Header.Group>
		</Header.Menu>
	);
};

export default HeaderMenu;
