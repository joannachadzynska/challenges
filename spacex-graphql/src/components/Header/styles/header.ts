import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { mediaQueries } from 'themes/mediaTemplates';

type Props = {
	open: boolean;
};

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(/images/bg/bg1.jpg) center center / cover no-repeat;
	width: 100%;
	height: 100%;

	z-index: -100;
`;

export const Container = styled(motion.nav)`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		border-bottom: 1px solid ${({ theme }) => theme.colors.white};
		justify-content: space-between;
	}
`;

export const Inner = styled.div`
	border: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1.25rem;
	padding-bottom: 0.1em;
	max-width: 1920px;

	/* 
export const screenSizes: Sizes = {
	sm: 414,
	md: 768,
	lg: 1024,
	xl: 1366,
}; */
`;

export const LogoLink = styled(NavLink)`
	font-size: clamp(1.5rem, 5vh, 3rem);
	font-weight: 700;
	padding: 0;
	color: ${({ theme }) => theme.colors.white};
`;

export const LogoBrand = styled(motion.div)`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoIcon = styled(motion.svg)`
	margin: 10px;
	width: clamp(30px, 5vw, 40px);
	overflow: visible;
	stroke: ${({ theme }) => theme.colors.white};
	stroke-width: 3;
	stroke-linejoin: round;
	stroke-linecap: round;
`;

export const LogoName = styled(motion.h2)`
	margin-left: 0.2em;
	font-size: clamp(1.5rem, 5vw, 3rem);
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
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	top: 15px;
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
