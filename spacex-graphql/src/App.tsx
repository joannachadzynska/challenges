import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header, Footer, Content } from './components/Layout';
import { GlobalStyle } from './styles/globalStyles';

const App: React.SFC = () => {
	const [themeMode, setThemeMode] = useState('light');
	return (
		<ThemeProvider theme={{ mode: `${themeMode}` }}>
			<GlobalStyle />
			<Router>
				<Header setThemeMode={setThemeMode} themeMode={themeMode} />
				<Content />
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
