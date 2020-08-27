import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	open: {
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	closed: {
		opacity: 1,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export interface MenuItemProps {}

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem: React.SFC<MenuItemProps> = ({ children }) => {
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			{children}
		</motion.li>
	);
};

export default MenuItem;
