import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import './index.scss';

const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql',
});

ReactDOM.render(
	<Suspense fallback={<p>loading ... </p>}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Suspense>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
