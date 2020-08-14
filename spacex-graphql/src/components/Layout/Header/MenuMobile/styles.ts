import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
	reverseBackground,
	reverseTextColor,
} from '../../../../themes/myTheme';

export const Hamburger = styled.button`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	top: 18px;
	left: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;
`;

export const Background = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	background: ${reverseBackground};
`;

export const MotionPath = styled(motion.path)`
	fill: transparent;
	stroke: ${reverseTextColor};
	stroke-width: 3;
	stroke-linecap: round;
`;

export const MotionUlNav = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 100px;
	left: 2rem;
	width: 230px;
`;

export const MotionLiNav = styled(motion.li)`
	list-style: none;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;

	a {
		color: ${reverseTextColor};
	}
`;

export const IconPlaceholder = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	flex: 40px 0;
	margin-right: 20px;
`;

export const TextPlaceholder = styled.div`
	border-radius: 5px;
	width: 200px;
	height: auto;
	padding-left: 10px;
	flex: 1;
`;
