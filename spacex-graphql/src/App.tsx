import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import './App.css';

import { Header, Footer, Content } from './components/Layout';
import { boxStyles, linkStyles } from './themes/myTheme';

const AppContainer = styled.div`
	height: 100vh;
	${boxStyles};
	a {
		${linkStyles}
		text-decoration: none
	}
`;

const App: React.SFC = () => {
	const [themeMode, setThemeMode] = useState('light');
	return (
		<ThemeProvider theme={{ mode: `${themeMode}` }}>
			<AppContainer>
				<Router>
					<Header setThemeMode={setThemeMode} themeMode={themeMode} />
					<Content />
					<Footer />
				</Router>
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
