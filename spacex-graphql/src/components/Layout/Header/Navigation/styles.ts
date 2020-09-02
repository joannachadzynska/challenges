import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../../../themes/mediaTemplates';

export const Hamburger = styled.button`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	top: 18px;
	right: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;

	${mediaQueries('md')`
    display: none;
  `};
`;

export const Background = styled(motion.div)`
	background: ${({ theme }) => theme.colors.white};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	${mediaQueries('md')`
    display: none;
  `};
`;

export const MotionPath = styled(motion.path)`
	fill: transparent;
	stroke: ${({ theme }) => theme.colors.blue.veryDark};
	stroke-width: 3;
	stroke-linecap: round;
`;

export const IconPlaceholder = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	flex: 40px 0;
	margin-right: 20px;

	${mediaQueries('md')`
        display: none
    `};
`;

export const TextPlaceholder = styled.div`
	border-radius: 5px;
	width: 200px;
	height: auto;
	padding-left: 10px;
	flex: 1;
	${mediaQueries('md')`
        border: none;

    `};
`;
