import { CardContainer } from 'components/pages/MissionsListing/components/MissionCard/styles';
import styled from 'styled-components';
import { SectionTitle } from 'styles/SectionTitle';
import { mediaQueries } from 'themes/mediaTemplates';

type CardProps = {
	isActive?: boolean;
};

export const RocketCardContainer = styled(CardContainer)<CardProps>`
	border-radius: 10px;
`;

export const RocketStatusContainer = styled.div<CardProps>`
	border-bottom: 1px solid
		${({ isActive, theme }) =>
			isActive ? theme.colors.green.dark : theme.colors.red};
	color: ${({ isActive, theme }) =>
		isActive ? theme.colors.green.dark : theme.colors.red};
	padding: 1em 2em;
`;

export const RocketCardContent = styled.div`
	padding: 0 2em 2em 2em;
`;

export const StyledRocketName = styled(SectionTitle)`
	color: ${({ theme }) => theme.colors.yellow.light};
	font-size: 1.25rem;

	${mediaQueries('md')`
    	font-size: 1.5rem;
  `};
`;

export const StyledFirstFlight = styled.span`
	display: block;
	font-size: 1rem;
	font-style: italic;
	margin: 1em 0;
	opacity: 0.8;

	time {
		margin-left: 1em;
	}
`;

export const StyledRocketDescription = styled.div`
	p {
		text-align: justify;
	}
`;
