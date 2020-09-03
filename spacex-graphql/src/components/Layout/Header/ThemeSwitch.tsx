import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

	input + ${ThemeSwitchSlider}::before {
		transform: ${(props: any) =>
			props.theme === 'light' ? 'translateX(0)' : 'translateX(26px)'};
	}

	input:checked + ${ThemeSwitchSlider} {
		background: linear-gradient(#091236, #1e215d);
	}

	input:checked + ${ThemeSwitchSlider}::before {
		transform: ${(props: any) =>
			props.theme === 'light' ? 'translateX(26px)' : 'translateX(0)'};
		color: azure;
		content: '\f186';
		font-family: FontAwesome;
	}
`;

export interface ThemeSwitchProps {
	toggleTheme?: () => void;
	theme?: string | null;
}

const ThemeSwitch: React.SFC<ThemeSwitchProps> = ({ toggleTheme, theme }) => {
	console.log(theme);

	return (
		<ThemeSwitchWrapper>
			<ThemeSwitchLabel htmlFor='checkbox'>
				<input type='checkbox' id='checkbox' onChange={toggleTheme} />
				<ThemeSwitchSlider />
			</ThemeSwitchLabel>
		</ThemeSwitchWrapper>
	);
};

export default ThemeSwitch;
