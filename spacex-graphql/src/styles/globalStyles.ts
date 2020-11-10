import { createGlobalStyle } from 'styled-components';
import planet from '../assets/images/planet1280.jpg';

export const fonts = {
	mavenPro: "'Maven Pro', sans-serif",
	montserrat: "'Montserrat', sans-serif",
};

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
        color:  ${({ theme }) => theme.colors.white};
	    font-family:  ${({ theme }) => theme.fonts.mavenPro};
        line-height: 1.5;
        transition: all 0.25s linear;
    }

    #root {
        height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto;
    }

	a {
        text-decoration: none;
        color:  ${({ theme }) => theme.colors.blue.veryDark}
	}

    ul {
	    list-style-type: none;
    }

    h1, h2 {
        color:  ${({ theme }) => theme.colors.white};
        text-shadow: rgba(0, 0, 0, 0.3) 3px 3px 4px;
    }

    img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
    }

    iframe {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.666rem;
    }
`;
