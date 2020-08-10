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

const backgroundColor = theme.variants('mode', 'variant', {
	default: { light: 'gray', dark: 'darkgray' },
	primary: { light: 'blue', dark: 'darkblue' },
	success: { light: 'green', dark: 'darkgreen' },
	warning: { light: 'orange', dark: 'darkorange' },
});

const Button = styled.button`
	background-color: ${backgroundColor};
	color: ${white};
`;

Button.defaultProps = {
	variant: 'default',
};

export { backgroundColor, Button, boxStyles };
