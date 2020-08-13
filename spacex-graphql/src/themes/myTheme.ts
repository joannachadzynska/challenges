import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const white = '#fff';
const black = '#000';

const boxStyles = theme('mode', {
	light: css`
		background: ${white};
		color: ${black};
	`,
	dark: css`
		background: ${black};
		color: ${white};
	`,
});

const navStyles = theme('mode', {
	light: css`
		background: ${black};
		color: ${white};
	`,
	dark: css`
		background: ${white};
		color: ${black};
	`,
});

const linkStyles = theme('mode', {
	light: css`
		color: ${black};
	`,
	dark: css`
		color: ${white};
	`,
});

export { boxStyles, linkStyles, navStyles };
