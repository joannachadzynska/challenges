import styled from 'styled-components';
import { mediaQueries } from '../../../themes/mediaTemplates';

export const StyledContent = styled.main`
	grid-area: content;
	min-height: 78vh;
	margin: 1rem auto;
	padding: 1rem;
	${mediaQueries('md')`
    justify-content: space-between
  `};
`;
