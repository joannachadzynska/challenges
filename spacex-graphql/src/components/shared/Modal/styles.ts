import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../../../themes/mediaTemplates';

export const ModalContainer = styled(motion.div)`
	background: azure;
	border: 5px solid black;
	height: 35vh;
	max-height: 100%;
	width: 60vh;
	max-width: 100%;
	overflow: auto;
	padding: 20px;
	text-align: center;
	z-index: 1010;

	${mediaQueries('md')`
    width: 70vh;
  `};
`;

export const ModalOverlay = styled(motion.div)`
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
`;
