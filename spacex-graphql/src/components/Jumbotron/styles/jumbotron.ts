import styled from 'styled-components/macro';
import { Button as HomeButton } from 'styles/Button';
import { fonts } from 'styles/globalStyles';

/* 
export const screenSizes: Sizes = {
	sm: 414,
	md: 768,
	lg: 1024,
	xl: 1366,
}; */
export const Button = styled(HomeButton)`
	align-self: stretch;
	font-size: 1.5rem;
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
		${Button} {
			position: absolute;
			right: 0;
			bottom: 30%;
		}
	}
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

	${SubTitle} {
		text-transform: none;
	}
`;

export const Countdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		max-width: 500px;
	}
`;

export const CountdownTime = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 75px;
	text-align: center;

	${Title} {
		color: ${({ theme }) => theme.colors.blue.primary};
		font-size: clamp(3rem, 5vw, 4rem);
		font-weight: 400;
	}
`;

export const CountdownName = styled.span`
	font-family: ${fonts.montserrat};
	font-size: clamp(0.875rem, 5vw, 1rem);
	text-transform: uppercase;
`;

export const Image = styled.img`
	height: auto;
	max-width: 100%;
`;
