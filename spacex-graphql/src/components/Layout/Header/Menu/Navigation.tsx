import React from 'react';
import { NavbarLinks, NavbarLink } from '../styles';
import MotionLink from './MotionLink';

type Link = {
	id: string;
	path: string;
	name: string;
};

export interface NavigationProps {
	links: Link[];
}

const Navigation: React.SFC<NavigationProps> = ({ links }) => {
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
