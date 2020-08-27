import styled, { createGlobalStyle } from 'styled-components';
import { textColor } from '../themes/myTheme';
import planet from '../assets/images/planet1280.jpg';

export const fonts = {
	mavenPro: "'Maven Pro', sans-serif",
	montserrat: "'Montserrat', sans-serif",
};

export const Div = styled.div`
	max-width: 100xp;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;

    }

    body {
        background-image: url(${planet});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right 0;
        background-attachment: fixed;
        color: ${textColor};
	    font-family: ${fonts.mavenPro};
        /* min-height: 100%; */
        transition: all 0.25s linear;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto;
    }


	a {
		   text-decoration: none;
	}

    ul {
	    list-style-type: none;
    }
`;
