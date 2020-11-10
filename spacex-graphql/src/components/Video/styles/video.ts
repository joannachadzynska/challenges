import styled from 'styled-components/macro';

export interface VideoProps {
	show?: boolean;
	play?: boolean;
}

export const Container = styled.div`
	position: relative;
	height: 100vh;
	max-height: 450px;
	margin-bottom: 0px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		margin-top: 70px;
		height: 55vh;
		max-height: initial;
	}
`;

export const Placeholder = styled.div<VideoProps>`
	display: ${({ show }) => (!show ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 3rem;
	text-shadow: rgba(0, 0, 0, 0.3) 3px 3px 4px;
`;

export const Button = styled.button<VideoProps>`
	cursor: pointer;
	font-weight: 700;
	border: none;
	padding: 1rem 2rem;
	margin: 0px auto;
	box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 10px;
`;

export const PlayButton = styled(Button)<VideoProps>`
	background: rgba(246, 199, 68, 0.85);
	color: rgb(0, 19, 30);
	opacity: ${({ show }) => (!show ? '1' : '0')};
`;

export const CloseButton = styled(Button)<VideoProps>`
	background: rgb(0, 83, 136);
	color: #fff;
	position: absolute;
	bottom: -50px;
	left: 50%;
	transform: translateX(-50%);
	opacity: ${({ show }) => (!show ? '1' : '0')};
`;

export const Background = styled.div<VideoProps>`
	display: flex;
	flex-direction: column;
	background-image: ${({ show }) =>
		show ? 'none' : 'url(/images/launchpad/launch_big.jpg)'};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
	margin-top: ${({ show }) => (show ? '0' : '2em')};
`;

export const FrameContainer = styled.div``;

export const Frame = styled.iframe<VideoProps>`
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 555;
	width: 100%;
	height: 100%;
`;
