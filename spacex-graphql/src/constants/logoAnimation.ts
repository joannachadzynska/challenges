const titleVariants = {
	hidden: {
		opacity: 0,
		y: -250,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay: 0.2, type: 'spring', stiffness: 120 },
	},
};

const svgVariants = {
	hidden: {
		x: '-50vh',
		y: '50vh',
		opacity: 0,
	},
	visible: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

export default { titleVariants, svgVariants };
