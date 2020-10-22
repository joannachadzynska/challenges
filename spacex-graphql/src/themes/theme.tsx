import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
	colors: {
		green: {
			light: '#25D225',
			dark: '#008000',
		},
		yellow: {
			light: '#F6C744',
		},
		blue: {
			dark: '#00395C',
			primary: '#0094FF',
			veryDark: '#002235',
		},
		white: '#ffffff',
		red: '#ff0000',
	},
	fonts: {
		mavenPro: "'Maven Pro', sans-serif",
		montserrat: "'Montserrat', sans-serif",
	},
	fontSizes: {
		small: '1rem',
		medium: '2rem',
		large: '3rem',
	},
};

const Theme: React.SFC = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
