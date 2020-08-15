import React from 'react';
import {
	ThemeSwitchWrapper,
	ThemeSwitchLabel,
	ThemeSwitchSlider,
} from './styles';

export interface ThemeSwitchProps {
	switchTheme: () => void;
}

const ThemeSwitch: React.SFC<ThemeSwitchProps> = ({ switchTheme }) => {
	return (
		<ThemeSwitchWrapper>
			<ThemeSwitchLabel htmlFor='checkbox'>
				<input type='checkbox' id='checkbox' onChange={switchTheme} />
				<ThemeSwitchSlider />
			</ThemeSwitchLabel>
			{/* <em>Enable Dark Mode!</em> */}
		</ThemeSwitchWrapper>
	);
};

export default ThemeSwitch;
