import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routing/routes';
import { GlobalStyle } from 'styles/globalStyles';
import Theme from 'themes/theme';

const App: React.SFC = () => (
	<Theme>
		<GlobalStyle />
		<Router>
			<Routes />
		</Router>
	</Theme>
);

export default App;
