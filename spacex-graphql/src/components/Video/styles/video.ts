import styled from 'styled-components/macro';

export interface VideoProps {
	show?: boolean;
	play?: boolean;
	bgSrc?: string;
}

export const Container = styled.div`
	position: relative;
	height: 100vh;
	max-height: 450px;
	margin-bottom: 5em;
	margin-top: 2em;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		height: 55vh;
		max-height: initial;
	}
`;

export const Placeholder = styled.div<VideoProps>`
	background-color: #0000005c;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	max-height: 448px;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	opacity: ${({ show }) => (!show ? '1' : '0')};
	transition: opacity 0.5s ease-out 0s;
	text-align: center;
	z-index: 777;

	@media (min-width: 768px) {
		height: 54.8vh;
		max-height: initial;
	}
`;

export const Title = styled.h1`
	font-size: clamp(3rem, 5vw, 5rem);
	font-weight: 400;
	text-shadow: rgba(0, 0, 0, 0.3) 3px 3px 4px;
	margin-bottom: 0.2em;
`;

export const Button = styled.button<VideoProps>`
	border: none;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 10px;
	cursor: pointer;
	font-weight: 700;
	margin: 0px auto;
	padding: 1rem 2rem;
`;

export const PlayButton = styled(Button)<VideoProps>`
	background: ${({ theme }) => theme.colors.yellow.light};
	color: rgb(0, 19, 30);
	opacity: ${({ show }) => (!show ? '1' : '0')};
	transition: background 0.3s ease-in;

	&:hover {
		background: #dca200;
	}
`;

export const CloseButton = styled(Button)<VideoProps>`
	background: ${({ theme }) => theme.colors.blue.dark};
	color: #fff;
	position: absolute;
	bottom: -60px;
	left: 50%;
	opacity: ${({ show }) => (!show ? '1' : '0')};
	transform: translateX(-50%);
	transition: background 0.3s ease-in;

	&:hover {
		background: #005e98;
	}
`;

export const Background = styled.div<VideoProps>`
	display: flex;
	flex-direction: column;
	background-image: ${({ show, bgSrc }) =>
		show || !bgSrc ? 'none' : `url(${bgSrc})`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
`;

export const FrameContainer = styled.div<VideoProps>``;

export const Frame = styled.iframe<VideoProps>`
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 555;
	width: 100%;
	height: 100%;
`;
