import React, { Suspense } from 'react';

import './App.css';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<ApolloProvider client={client}>
				<div className='App'>gh</div>
			</ApolloProvider>
		</Suspense>
	);
}

export default App;
