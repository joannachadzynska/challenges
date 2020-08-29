import styled from 'styled-components';
import { mediaQueries } from '../../../themes/mediaTemplates';
import { fonts } from '../../../styles/globalStyles';

export const LandingContainer = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 800px;
	min-height: 72vh;

	${mediaQueries('md')`
        justify-content: flex-end;
    `};
`;

export const LandingHeader = styled.div`
	h1 {
		font-size: 4.75rem;
		font-weight: 700;

		${mediaQueries('md')`
        font-size: 6rem;
    `};
	}

	h2 {
		font-family: ${fonts.montserrat};
		font-size: 1.25rem;
		font-weight: 500;
		text-transform: uppercase;

		${mediaQueries('md')`
        font-size: 1.75rem;
    `};
	}
`;

export const CountdownContainer = styled.div`
	h2 {
		font-family: ${fonts.montserrat};
		font-size: 1rem;
		font-weight: 500;

		${mediaQueries('md')`
        font-size: 2rem;
    `};
	}

	${mediaQueries('md')`
        margin-top: 1em;

    `};
`;

export const Countdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2em;

	${mediaQueries('md')`
        max-width: 500px;
    `};
`;

export const CountdownTime = styled.div`
	text-align: center;
	max-width: 75px;
	h1 {
		color: #0094ff;
		font-size: 2rem;
		font-weight: 400;

		${mediaQueries('md')`
        font-size: 4rem;
    `};
	}
	span {
		font-family: ${fonts.montserrat};
		font-size: 0.875rem;
		text-transform: uppercase;

		${mediaQueries('md')`
        font-size: 1.25rem;
    `};
	}
`;
