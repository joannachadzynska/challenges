import ApolloClient from 'apollo-boost';
import React, { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { LoadingIndicator } from './components/shared';

const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql',
});

ReactDOM.render(
	<Suspense fallback={<LoadingIndicator />}>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApolloProvider>
	</Suspense>,
	document.getElementById('root')
);
