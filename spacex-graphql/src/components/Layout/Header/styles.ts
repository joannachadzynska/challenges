import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { navStyles } from '../../../themes/myTheme';
import theme from 'styled-theming';

export const Navbar = styled.nav`
	${navStyles}
	width:100%;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavbarLinks = styled.div`
	ul {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin: 0;
		padding: 0;

		li {
		}
	}
`;

const navLinkStyles = theme('mode', {
	light: css`
		color: #fff;
	`,
	dark: css`
		color: #000;
	`,
});

export const NavbarLink = styled(NavLink)`
	${navLinkStyles};
	display: block;
	padding: 1rem;
`;

export const NavbarBrand = styled.div`
	font-size: 1.5rem;
	margin: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RocketSvg = styled.svg`
	margin: 10px;
	width: 40px;
	overflow: visible;
	stroke: #fff;
	stroke-width: 4;
	stroke-linejoin: round;
	stroke-linecap: round;
`;
