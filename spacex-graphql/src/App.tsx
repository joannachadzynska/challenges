import { Content } from 'components/Layout';
import { Footer, Header } from 'containers';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'styles/globalStyles';
import Theme from 'themes/theme';

const App: React.SFC = () => {
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
