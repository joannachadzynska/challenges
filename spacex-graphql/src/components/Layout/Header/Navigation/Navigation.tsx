import React from 'react';
import { NavbarLinks, NavbarLink } from '../styles';
import MotionLink from '../Menu/MotionLink';

export interface NavigationProps {}
const links = [
	{ id: 'launches', path: '/launches', name: 'Missions' },
	{ id: 'rockets', path: '/rockets', name: 'Rockets' },
	{ id: 'about', path: '/about', name: 'About' },
];

const Navigation: React.SFC<NavigationProps> = () => {
	return (
		<NavbarLinks>
			<ul>
				{links.map((link) => (
					<MotionLink key={link.id}>
						<NavbarLink to={link.path}>{link.name}</NavbarLink>
					</MotionLink>
				))}
			</ul>
		</NavbarLinks>
	);
};

export default Navigation;
