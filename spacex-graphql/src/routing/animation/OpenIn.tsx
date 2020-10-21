import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	slide?: number;
	slideUp?: number;
	isActive: boolean;
};

export const OpenIn: FC<Props> = ({ children, isActive = false }) => (
	<AnimatePresence>
		{isActive && (
			<motion.div
				exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
				initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
				animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}>
				{children}
			</motion.div>
		)}
	</AnimatePresence>
);
