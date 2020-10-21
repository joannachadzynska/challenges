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

const links = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const menuItem = {
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

export default { sidebar, links, menuItem };
