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

    body {
        ${boxStyles}
        margin: 0;
	    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    min-height: 100vh;
	    max-width: 960px;
        margin: 0 auto;
        transition: all 0.25s linear;
    }


	a {
		${linkStyles};
		text-decoration: none;
	}

    ul {
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}
`;
