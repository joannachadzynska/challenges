import styled from 'styled-components';
import theme from 'styled-theming';
import { motion } from 'framer-motion';

const white = '#fff';
// const black = '#000';

const backgroundColor = theme.variants('mode', 'variant', {
	default: { light: 'gray', dark: 'darkgray' },
	primary: { light: 'blue', dark: 'darkblue' },
	success: { light: 'green', dark: 'darkgreen' },
	warning: { light: 'orange', dark: 'darkorange' },
});

const Button = styled(motion.button)`
	background-color: ${backgroundColor};
	border: none;
	border-radius: 10px;
	color: ${white};
	font-size: 1rem;
	padding: 10px 25px;
`;

Button.defaultProps = {
	variant: 'default',
};

export { Button };
