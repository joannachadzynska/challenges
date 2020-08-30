import styled from 'styled-components';
import { mediaQueries } from '../../../themes/mediaTemplates';
import { fonts } from '../../../styles/globalStyles';

export const LandingContainer = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2em;
	max-width: 800px;
	min-height: 72vh;

	${mediaQueries('md')`
       justify-content: flex-end;
       position: relative;

       button {
           position: absolute;
           right: 0;
           bottom: 5%;
       }
    `};
`;

export const LandingHeader = styled.div`
	h1 {
		font-size: 4.75rem;
		font-weight: 700;
		line-height: 1.1;

		${mediaQueries('md')`
        font-size: 5.25rem;

    `};
	}

	h2 {
		font-family: ${fonts.montserrat};
		font-size: 1.25rem;
		font-weight: 500;
		margin-top: 1em;
		text-transform: uppercase;

		${mediaQueries('md')`
        font-size: 1.5rem;
        margin-bottom: 2em;
    `};
	}
`;

export const CountdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		font-family: ${fonts.montserrat};
		font-size: 1.25rem;
		font-weight: 500;

		${mediaQueries('md')`
        font-size: 1.5rem;
    `};
	}

	${mediaQueries('md')`

    `};
`;

export const Countdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${mediaQueries('md')`
        max-width: 500px;
    `};
`;

export const CountdownTime = styled.div`
	text-align: center;
	max-width: 75px;
	h1 {
		color: #0094ff;
		font-size: 3rem;
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
        font-size: 1rem;
    `};
	}
`;
