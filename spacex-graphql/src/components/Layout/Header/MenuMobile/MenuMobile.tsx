import React from 'react';
import { Background } from './styles';
import NavigationMobile from './NavigationMobile';
import MenuToggle from './MenuToggle';

type Link = {
	id: string;
	path: string;
	name: string;
};

export interface MenuMobileProps {
	links: Link[];
	toggle: () => void;
	isOpen: boolean;
}

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const MenuMobile: React.SFC<MenuMobileProps> = ({ links, toggle, isOpen }) => {
	return (
		<>
			<Background variants={sidebar} />
			<NavigationMobile links={links} isOpen={isOpen} />

			{<MenuToggle toggle={toggle} />}
		</>
	);
};

export default MenuMobile;
