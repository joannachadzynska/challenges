import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { mediaQueries } from 'themes/mediaTemplates';

type Props = {
	open: boolean;
};

export const Wrapper = styled.section`
	width: 100%;
	max-width: 1180px;
	margin: 0 auto;
	padding: 0 10px;
`;

export const Container = styled(motion.nav)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: clamp(45px, 2.5vw, 5rem);
	margin: 0 2.812rem;
	padding-top: 1.25rem;
	max-width: 1920px;
`;

export const Inner = styled.div`
	border-bottom: 5px solid ${({ theme }) => theme.colors.white};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-bottom: 0.1em;

	${mediaQueries('md')`
    justify-content: space-between
  `};
`;

export const LogoLink = styled(NavLink)`
	font-size: 3rem;
	font-weight: 700;
	padding: 0;
	color: ${({ theme }) => theme.colors.white};
`;

export const LogoBrand = styled(motion.div)`
	font-size: 1.5rem;
	margin: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoIcon = styled(motion.svg)`
	margin: 10px;
	width: 40px;
	overflow: visible;
	stroke: ${({ theme }) => theme.colors.white};
	stroke-width: 3;
	stroke-linejoin: round;
	stroke-linecap: round;
`;

export const LogoName = styled(motion.h2)`
	margin-left: 1rem;
`;

export const Menu = styled(motion.nav)``;

export const MenuBackground = styled(motion.div)`
	background: ${({ theme }) => theme.colors.white};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	${mediaQueries('md')`
    display: none;
  `};
`;

export const MenuHamburger = styled.div`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	top: 18px;
	right: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;

	${mediaQueries('md')`
    display: none;
  `};
`;

export const MotionPath = styled(motion.path)`
	fill: transparent;
	stroke: ${({ theme }) => theme.colors.blue.veryDark};
	stroke-width: 3;
	stroke-linecap: round;
`;

export const MenuGroup = styled(motion.ul)`
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

export const MenuNavItem = styled(motion.li)``;

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
