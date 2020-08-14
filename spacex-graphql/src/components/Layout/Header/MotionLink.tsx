import React from 'react';
import { motion } from 'framer-motion';
import theme from 'styled-theming';
import { colors } from '../../../themes/myTheme';

const MotionLink: React.SFC = ({ children }) => {
	const bg = theme('mode', {
		light: `${colors.light.primary}`,
		dark: `${colors.dark.primary}`,
	});
	console.log(bg);

	return (
		<motion.li whileHover={{ backgroundColor: `red` }}>{children}</motion.li>
	);
};

export default MotionLink;
