import React from 'react';
import MenuItem from './MenuItem';
import { MotionUlNav } from './styles';

type Link = {
	id: string;
	path: string;
	name: string;
};

export interface NavigationProps {
	links: Link[];
	isOpen: boolean;
}

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const NavigationMobile: React.SFC<NavigationProps> = ({ links, isOpen }) => {
	return (
		<MotionUlNav variants={variants}>
			{links.map((link, index) => (
				<MenuItem key={link.id} i={index} {...link} />
			))}
		</MotionUlNav>
	);
};

export default NavigationMobile;
