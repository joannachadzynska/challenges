import React from 'react';
import { motion } from 'framer-motion';

const MotionLink: React.SFC = ({ children }) => {
	return <motion.li whileHover={{ filter: `invert()` }}>{children}</motion.li>;
};

export default MotionLink;
