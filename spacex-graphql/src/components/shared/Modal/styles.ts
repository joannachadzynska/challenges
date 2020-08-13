import styled from 'styled-components';

export const ModalContainer = styled.div`
	background: azure;
	border: 5px solid black;
	height: 35vh;
	max-height: 100%;
	width: 80vh;
	max-width: 100%;
	overflow: auto;
	padding: 20px;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1010;
`;

export const ModalOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
`;
