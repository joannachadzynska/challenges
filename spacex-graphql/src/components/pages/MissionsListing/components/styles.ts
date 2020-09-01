import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fonts } from '../../../../styles/globalStyles';

export const TabsContainer = styled.nav`
	background: #fff;

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		align-items: center;
		justify-content: space-between;
		padding: 1.5em 2em;

		li {
		}
	}
`;

export const TabLink = styled(NavLink)`
	color: #000;
	font-family: ${fonts.montserrat};
	font-size: 1.125rem;
	font-weight: 600;

	&:hover,
	&:focus {
		color: red;
	}
`;
