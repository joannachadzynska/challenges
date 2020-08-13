import styled from 'styled-components';
import { navStyles } from '../../../themes/myTheme';

export const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: footer;
	padding: 1rem;
	${navStyles}
`;
