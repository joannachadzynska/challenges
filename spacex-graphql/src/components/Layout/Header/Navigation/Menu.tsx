import React, { useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import { useDimensions } from '../../../../hooks/useDimensions';
import Navigation from './Navigation';
import MenuToggle from './MenuToggle';
import { Background } from './styles';

export interface MenuProps {}
const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		width: 300,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		width: 80,
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const Menu: React.SFC<MenuProps> = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}>
			<Background variants={sidebar} />
			<Navigation isOpen={isOpen} />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default Menu;
