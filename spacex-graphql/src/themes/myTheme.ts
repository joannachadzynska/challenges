import { css } from 'styled-components';
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

const boxStyles = theme('mode', {
	light: css`
		background: ${colors.light.background};
		color: ${colors.light.color};
	`,
	dark: css`
		background: ${colors.dark.background};
		color: ${colors.dark.color};
	`,
});

const navStyles = theme('mode', {
	light: css`
		color: ${colors.light.color};
	`,
	dark: css`
		color: ${colors.dark.color};
	`,
});

const linkStyles = theme('mode', {
	light: css`
		color: ${colors.light.color};
	`,
	dark: css`
		color: ${colors.dark.color};
	`,
});

export { boxStyles, linkStyles, navStyles, colors };
