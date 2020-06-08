import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "stores/store";
import { Header, Content, Footer } from "components/+Layout";

import "./App.css";
import { Toolbar } from "@material-ui/core";

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Router>
					<Header />
					<Toolbar />
					<Toolbar />
					<Content />
					<Footer />
				</Router>
			</div>
		</Provider>
	);
}

export default App;
