import styled from 'styled-components';
import { mediaQueries } from '../../../themes/mediaTemplates';

export const LandingContainer = styled.section`
	background-color: red;

	${mediaQueries('md')`
    background-color: green;
  `};
`;
