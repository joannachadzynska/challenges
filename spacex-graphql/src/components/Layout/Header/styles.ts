import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { textColor } from '../../../themes/myTheme';

export const StyledHeader = styled.header`
	grid-area: header;
`;

export const Navbar = styled(motion.nav)`
	width: 100%;
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
	background-color: #ccc;
	bottom: 0;
	border-radius: 34px;
	cursor: pointer;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: 0.4s;

	&::before {
		background-color: #fff;
		bottom: 4px;
		border-radius: 50%;
		content: '';
		height: 26px;
		left: 4px;
		position: absolute;
		transition: 0.4s;
		width: 26px;
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
		background-color: #66bb6a;
	}

	input:checked + ${ThemeSwitchSlider}::before {
		transform: translateX(26px);
	}
`;
