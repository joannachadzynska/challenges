import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer, Content } from './components/Layout';
// import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyle } from './styles/globalStyles';
import Theme from './themes/theme';

const App: React.SFC = () => {
	// const { theme, themeToggler, mountedComponent } = useDarkMode();

	// if (!mountedComponent) return <div />;

	return (
		<Theme>
			<GlobalStyle />
			<Router>
				<Header />
				<Content />
				<Footer />
			</Router>
		</Theme>
	);
};

export default App;
