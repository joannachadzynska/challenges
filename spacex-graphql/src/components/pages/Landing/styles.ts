import styled from 'styled-components';
import { mediaQueries } from '../../../themes/mediaTemplates';
import { fonts } from '../../../styles/globalStyles';

export const LandingContainer = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 74vh;
	max-width: 800px;
	margin: 0 0 0 4em;
	/* background-color: red;

	${mediaQueries('md')`
    background-color: green;
  `}; */
`;

export const LandingHeader = styled.div`
	h1 {
		font-size: 6.25rem;
		font-weight: 700;
		line-height: 1;
	}
	h2 {
		font-family: ${fonts.montserrat};
		font-size: 1.875rem;
		font-weight: 500;
		margin-top: 1em;
		text-transform: uppercase;
	}
`;

export const CountdownContainer = styled.div`
	margin-top: 2em;
	h2 {
		font-family: ${fonts.montserrat};
		font-size: 1.625rem;
		font-weight: 500;
	}
`;

export const Countdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CountdownTime = styled.div`
	text-align: center;
	h1 {
		color: #0094ff;
		font-size: 5rem;
		font-weight: 400;
	}
	span {
		font-family: ${fonts.montserrat};
		text-transform: uppercase;
	}
`;
