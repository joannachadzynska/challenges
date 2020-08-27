import React from 'react';
import { NavbarLinks, NavbarLink } from '../styles';
import MenuItem from './MenuItem';

type NavigationProps = {
	isOpen: boolean;
};

const links = [
	{ id: 'launches', path: '/launches', name: 'Missions' },
	{ id: 'rockets', path: '/rockets', name: 'Rockets' },
	{ id: 'about', path: '/about', name: 'About' },
];

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const Navigation: React.SFC<NavigationProps> = ({ isOpen }) => {
	return (
		<NavbarLinks variants={variants}>
			{links.map((link) => (
				<MenuItem key={link.id}>
					<NavbarLink to={link.path} open={isOpen}>
						{link.name}
					</NavbarLink>
				</MenuItem>
			))}
		</NavbarLinks>
	);
};

export default Navigation;
