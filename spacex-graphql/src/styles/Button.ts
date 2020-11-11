import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from '../themes/mediaTemplates';

interface IProps {
	variant?: 'default' | 'yellow' | 'green';
	fontSize?: string;
	style?: 'outline' | 'filled';
}

export const Button = styled(motion.button)<IProps>`
	background: transparent;
	border-radius: 5px;
	border: 2px solid;
	${(props) => {
		switch (props.variant) {
			case 'green':
				return `
                color: ${props.theme.colors.green.dark};
                border-color: ${props.theme.colors.green.dark}
            `;
			case 'yellow':
				return `
                color: ${props.theme.colors.yellow.light};
                border-color: ${props.theme.colors.yellow.light}
            `;
			case 'default':
			default:
				return `
                color: ${props.theme.colors.blue.primary};
                border-color: ${props.theme.colors.blue.primary}
            `;
		}
	}};
	font-size: clamp(0.875rem, 5vw, 1.5rem);
	padding: 0.875em 1.5em;
	text-transform: uppercase;
	transition: 0.3s all linear;

	&:hover,
	&:focus {
		border-color: transparent;
		${(props) => {
			switch (props.variant) {
				case 'green':
					return `
                color: ${props.theme.colors.blue.veryDark};
                background: ${props.theme.colors.green.dark}
            `;
				case 'yellow':
					return `
                color: ${props.theme.colors.blue.veryDark};
                background: ${props.theme.colors.yellow.light}
            `;
				case 'default':
				default:
					return `
                color: ${props.theme.colors.white};
                background: ${props.theme.colors.blue.primary}
            `;
			}
		}};
		font-weight: 600;
	}

	${mediaQueries('md')`
        align-self: flex-start;
    `};
`;

export const StyledLinkButton = styled(Link)<IProps>`
	background: transparent;
	border-radius: 5px;
	border: 2px solid;
	display: block;
	${(props) => {
		switch (props.variant) {
			case 'green':
				return `
                color: ${props.theme.colors.green.dark};
                border-color: ${props.theme.colors.green.dark}
            `;
			case 'yellow':
				return `
                color: ${props.theme.colors.yellow.light};
                border-color: ${props.theme.colors.yellow.light}
            `;
			case 'default':
			default:
				return `
                color: ${props.theme.colors.blue.primary};
                border-color: ${props.theme.colors.blue.primary}
            `;
		}
	}};
	font-size: ${(props) => props.fontSize}rem;
	margin: 0 auto;
	margin-bottom: 2em;
	padding: 0.875em 1.5em;
	text-align: center;
	text-transform: uppercase;
	transition: 0.4s all linear;

	&:hover,
	&:focus {
		${(props) => {
			switch (props.variant) {
				case 'green':
					return `
                color: ${props.theme.colors.blue.veryDark};
                background: ${props.theme.colors.green.dark}
            `;
				case 'yellow':
					return `
                color: ${props.theme.colors.blue.veryDark};
                background: ${props.theme.colors.yellow.light}
            `;
				case 'default':
				default:
					return `
                color: ${props.theme.colors.white};
                background: ${props.theme.colors.blue.primary}
            `;
			}
		}};
		font-weight: 600;
	}

	${mediaQueries('md')`
        align-self: flex-start;
    `};
`;
