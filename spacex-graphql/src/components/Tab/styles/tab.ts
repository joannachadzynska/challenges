import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { fonts } from 'styles/globalStyles';

export const Container = styled.nav`
	background-color: #fff;
	margin-top: 2em;
`;

export const Inner = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	align-items: center;
	justify-content: space-between;
	padding: 1.5em 2em;
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
