import styled from 'styled-components';
import { mediaQueries } from '../../../themes/mediaTemplates';

export const Grid = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;
    max-width: 100%;
    
    /* margin: 1em auto; */

	/* ${mediaQueries('md')`
    justify-content: space-between
  `}; */
`;
