import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, NotFound } from "pages";

const Content = () => {
	return (
		<section>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</section>
	);
};

export default Content;
