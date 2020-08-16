import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header, Footer, Content } from './components/Layout';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyle } from './styles/globalStyles';

const App: React.SFC = () => {
	const { theme, themeToggler, mountedComponent } = useDarkMode();

	if (!mountedComponent) return <div />;

	return (
		<ThemeProvider theme={{ mode: `${theme}` }}>
			<GlobalStyle />
			<Router>
				<Header toggleTheme={themeToggler} theme={theme} />
				<Content />
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
