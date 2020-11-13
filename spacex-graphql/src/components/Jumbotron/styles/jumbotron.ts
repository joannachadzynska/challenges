import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { fonts } from 'styles/globalStyles';

export const Button = styled(Link)`
	align-self: center;
	box-shadow: inset 0px 1px 0px 0px #fff6af;
	background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color: #ffec64;
	border-radius: 6px;
	border: 1px solid #ffaa22;
	color: #333;
	font-size: clamp(0.875rem, 5vw, 1.5rem);
	font-weight: bold;
	padding: 0.875em 1.5em;
	text-transform: uppercase;
	text-shadow: 0px 1px 0px #ffee66;
	transition: 1s ease-in;

	&:hover,
	&:focus {
		background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
		background-color: #ffab23;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 2em;
	max-width: 1024px;
	margin: 2em 0.75em 0 0.75em;
	min-height: 75vh;

	@media (min-width: 768px) {
		justify-content: center;
		margin: 0 3em;
		padding: 0 3em;
		position: relative;
	}
`;

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(/images/bg/bg1.jpg) center center / cover no-repeat;
	width: 100%;
	height: 100%;

	z-index: -100;
`;

export const HeaderContainer = styled.div`
	width: 100%;
	margin: 0 auto;
`;

export const Title = styled.h1`
	font-size: clamp(3.125rem, 5vw, 4.74rem);
	font-weight: 700;
	line-height: 1.1;
	margin-bottom: 0.5em;
`;

export const SubTitle = styled.h2`
	font-family: ${fonts.montserrat};
	font-size: clamp(1.25rem, 5vw, 1.5rem);
	font-weight: 500;
	line-height: normal;
	text-transform: uppercase;
`;

export const CountdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;

	${SubTitle} {
		text-transform: none;
	}
`;

export const Countdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CountdownTime = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex: 1 1 25%;
	justify-content: space-between;
	align-items: center;
	/* font-size: clamp(1.312rem, 10vw, 8.437rem); */
	text-align: center;

	background: linear-gradient(
		to top,
		rgba(0, 83, 136, 0.65) 0%,
		rgba(0, 83, 136, 0) 100%
	);
	margin: 0px 2px;
	border-radius: 3px;
	overflow: hidden;

	${Title} {
		color: ${({ theme }) => theme.colors.blue.primary};
		font-size: clamp(1.312rem, 10vw, 8.437rem);
		font-weight: 400;
	}
`;

export const CountdownName = styled.span`
	background: rgba(0, 83, 136, 0.45);
	color: white;
	display: flex;
	flex: 1 1 0%;
	justify-content: center;
	font-weight: 700;
	font-family: ${fonts.montserrat};
	font-size: clamp(0.875rem, 5vw, 1.4rem);
	text-transform: uppercase;
	width: 100%;
`;

export const Image = styled.img`
	height: auto;
	max-width: 100%;
`;
