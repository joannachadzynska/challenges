import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { textColor } from '../../../themes/myTheme';
import { mediaQueries } from '../../../themes/mediaTemplates';

export const StyledHeader = styled.header`
	grid-area: header;
`;

export const Navbar = styled(motion.nav)`
	width: 100%;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	${mediaQueries('md')`
    justify-content: space-between
  `};
`;

export const NavbarLinks = styled.div`
	ul {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin: 0;
		padding: 0;
	}
`;

export const NavbarLink = styled(NavLink)`
	color: ${textColor};
	display: block;
	padding: 1rem;
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

// Theme Switch component
export const ThemeSwitchWrapper = styled.div`
	display: flex;
	align-items: center;

	em {
		margin-left: 10px;
		font-size: 1rem;
	}
`;

export const ThemeSwitchSlider = styled(motion.div)`
	background: linear-gradient(#39598a, #79d7ed);
	bottom: 0;
	border: 1px solid #fff;
	border-radius: 34px;
	cursor: pointer;
	height: 100%;
	position: relative;
	transition: 0.4s;

	&::before {
		color: yellow;
		content: '\f185';
		font-family: FontAwesome;
		font-size: 22px;
		position: absolute;
		left: 4px;
		transition: 0.4s;
	}
`;

export const ThemeSwitchLabel = styled.label`
	display: inline-block;
	height: 34px;
	position: relative;
	width: 60px;

	input {
		display: none;
	}

	input:checked + ${ThemeSwitchSlider} {
		background: linear-gradient(#091236, #1e215d);
	}

	input:checked + ${ThemeSwitchSlider}::before {
		transform: translateX(26px);
		color: azure;
		content: '\f186';
		font-family: FontAwesome;
	}
`;
