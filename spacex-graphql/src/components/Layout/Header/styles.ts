import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { textColor } from '../../../themes/myTheme';
import { mediaQueries } from '../../../themes/mediaTemplates';

type Props = {
	open: boolean;
};

export const StyledHeader = styled.header``;

export const Navbar = styled(motion.nav)`
	width: 100%;
`;

export const NavbarContainer = styled.div`
	border-bottom: 5px solid #fff;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-bottom: 0.1em;

	${mediaQueries('md')`
    justify-content: space-between
  `};
`;

export const NavbarLinks = styled(motion.ul)`
	margin: 0;
	padding: 0;
	padding: 25px;
	position: absolute;
	top: 100px;
	right: 0;
	width: 230px;

	${mediaQueries('md')`
    position: static;
    display: flex;
    align-items: center;
	justify-content: space-between;
    width: auto;
    padding: 0;
    text-align: right;

    li:last-child a {
        padding-right:0;
    }
  `};
`;

export const NavbarLink = styled(NavLink)<Props>`
	color: #000;
	cursor: pointer;
	font-weight: 500;
	font-size: 1.5rem;
	display: ${(props) => (props.open ? 'block' : 'none')};
	padding: 1rem;
	transition-delay: 0.3s;

	${mediaQueries('md')`
    display: block;
    color: #fff;
  `};
`;

export const NavbarBrand = styled(motion.div)`
	font-size: 1.5rem;
	margin: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RocketSvg = styled(motion.svg)`
	margin: 10px;
	width: 40px;
	overflow: visible;
	stroke: ${textColor};
	stroke-width: 4;
	stroke-linejoin: round;
	stroke-linecap: round;
`;

export const LogoLink = styled(NavLink)`
	font-size: 3rem;
	font-weight: 700;
	padding: 0;
	color: #fff;
`;
