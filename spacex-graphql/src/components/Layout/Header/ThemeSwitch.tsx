import React from 'react';

import {
	ThemeSwitchWrapper,
	ThemeSwitchLabel,
	ThemeSwitchSlider,
} from './styles';

export interface ThemeSwitchProps {
	toggleTheme: () => void;
	theme: string | null;
}

const ThemeSwitch: React.SFC<ThemeSwitchProps> = ({ toggleTheme, theme }) => {
	console.log(theme);

	return (
		<ThemeSwitchWrapper>
			<ThemeSwitchLabel htmlFor='checkbox' theme>
				<input type='checkbox' id='checkbox' onChange={toggleTheme} />
				<ThemeSwitchSlider theme />
			</ThemeSwitchLabel>
		</ThemeSwitchWrapper>
	);
};

export default ThemeSwitch;
