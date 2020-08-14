import styled, { createGlobalStyle } from 'styled-components';
import { boxStyles, linkStyles } from '../themes/myTheme';

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
        height: 100%
    }

    body {
        ${boxStyles}
        margin: 0;
	    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        line-height: 1.6;
        min-height: 100%;
        transition: all 0.25s linear;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto;
        grid-template-areas: 
            "header",
            "content",
            "footer"
    }


	a {
		/* ${linkStyles}; */
		text-decoration: none;
	}

    ul {
	    list-style-type: none;
    }
`;
