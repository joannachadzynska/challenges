import React from 'react';
import { NavLink } from 'react-router-dom';

import { MotionLiNav, IconPlaceholder, TextPlaceholder } from './styles';

export interface MenuItemProps {
	id: string;
	path: string;
	name: string;
	i: number;
}

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem: React.SFC<MenuItemProps> = ({ id, name, path, i }) => {
	const style = { border: `2px solid ${colors[i]}` };
	return (
		<MotionLiNav
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			<IconPlaceholder style={style} />
			<TextPlaceholder>
				<NavLink to={path}>{name}</NavLink>{' '}
			</TextPlaceholder>
		</MotionLiNav>
	);
};

export default MenuItem;
