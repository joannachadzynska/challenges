import styled from 'styled-components';
import {
	CardContainer,
	CardImageWrapper,
	CardContentContainer,
} from '../../../MissionsListing/components/MissionCard/styles';
import { mediaQueries } from '../../../../../themes/mediaTemplates';

export const CardDetailsContainer = styled(CardContainer)``;

export const CardMainContainer = styled.div`
	display: grid;
	grid-template-rows: auto 2fr 1fr;
	row-gap: 1.5em;
	padding: 1.5em;

	${mediaQueries('md')`
    grid-template-columns: auto 1.25fr 1fr;
    column-gap: 3em;
    row-gap: 0;
  `};
`;

export const CardDetailsImageWrapper = styled(CardImageWrapper)`
	margin: 0 auto;
	padding: 0;
	display: flex;
	align-items: center;
	max-width: 200px;
`;

export const CardDetailsImage = styled.img`
	margin: 0 auto;
	padding: 0;
	max-width: 100%;
	height: auto;
`;

export const CardDetailsContentContainer = styled(CardContentContainer)`
	text-align: left;
	padding: 1em 0;
	margin: 0;
`;

export const Description = styled.div`
	margin-top: 1em;

	p {
		font-size: 0.938rem;
		opacity: 0.9;
	}

	${mediaQueries('md')`

  `};
`;

export const LaunchInfoContainer = styled.div`
	order: 2;
	padding-top: 1em;
	border-top: 1px dotted rgb(255, 255, 255);

	ul {
		margin: 0;
	}

	${mediaQueries('md')`
    align-self: center;
    border-left: 1px dotted rgb(255, 255, 255);
    border-top: none;
    padding:0;

        ul {
            margin-left: 1em;
        }
  `};
`;

export const InfoTitle = styled.li`
	font-size: 0.938rem;
	opacity: 0.9;
	margin-bottom: calc(1.666em / 2);
	padding-left: 0;

	*:last-child {
		margin-bottom: 0;
	}

	span {
		color: ${({ theme }) => theme.colors.yellow.light};
		margin-right: 1em;
	}
`;
