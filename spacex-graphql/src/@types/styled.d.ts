import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			green: {
				light: string;
				dark: string;
			};
			yellow: {
				light: string;
			};
			blue: {
				dark: string;
				primary: string;
				veryDark: string;
			};
			white: string;
			red: string;
		};
		fonts: {
			mavenPro: string;
			montserrat: string;
		};
		fontSizes: {
			small: string;
			medium: string;
			large: string;
		};
	}
}
