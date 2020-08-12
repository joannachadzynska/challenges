import React from 'react';
import { motion } from 'framer-motion';

const MotionLink: React.SFC = ({ children }) => {
	return (
		<motion.li
			whileHover={{ backgroundColor: '#555' }}
			transition={{ damping: 1 }}>
			{children}
		</motion.li>
	);
};

export default MotionLink;
