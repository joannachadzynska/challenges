import theme from 'styled-theming';

const colors = {
	light: {
		background: '#fff',
		color: '#424242',
		heading: '#292922',
		primary: '#302AE6',
		secondary: '#536390',
	},
	dark: {
		background: '#161625',
		color: '#e1e1ff',
		heading: '#818cab',
		primary: '#9A97F3',
		secondary: '#818cab',
	},
};

const backgroundColor = theme('mode', {
	light: `${colors.light.background}`,
	dark: `${colors.dark.background}`,
});

const reverseBackground = theme('mode', {
	light: `${colors.dark.background}`,
	dark: `${colors.light.background}`,
});

const textColor = theme('mode', {
	light: `${colors.light.color}`,
	dark: `${colors.dark.color}`,
});

const reverseTextColor = theme('mode', {
	light: `${colors.dark.color}`,
	dark: `${colors.light.color}`,
});

const headingColor = theme('mode', {
	light: `${colors.light.heading}`,
	dark: `${colors.dark.heading}`,
});

const primaryColor = theme('mode', {
	light: `${colors.light.primary}`,
	dark: `${colors.dark.primary}`,
});

const secondaryColor = theme('mode', {
	light: `${colors.light.secondary}`,
	dark: `${colors.dark.secondary}`,
});

export {
	colors,
	backgroundColor,
	textColor,
	headingColor,
	primaryColor,
	reverseBackground,
	reverseTextColor,
	secondaryColor,
};
