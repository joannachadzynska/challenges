import styled from 'styled-components';
import { mediaQueries } from 'themes/mediaTemplates';

export const SectionTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 1.1;
	margin: 1em 0;
	text-transform: uppercase;

	${mediaQueries('md')`
    	font-size: 2rem;
  `};
`;
