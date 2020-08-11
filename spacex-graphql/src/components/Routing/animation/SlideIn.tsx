import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	slide?: number;
	isActive: boolean;
	key: string;
};

export const SlideIn: FC<Props> = ({
	children,
	isActive = false,
	slide = 30,
	key = 'auniquestring',
}) => (
	<AnimatePresence>
		{isActive && (
			<motion.div
				key={key}
				exit={{ opacity: 0, x: slide }}
				initial={{ opacity: 0, x: slide }}
				animate={{ opacity: 1, x: 0 }}>
				{children}
			</motion.div>
		)}
	</AnimatePresence>
);
