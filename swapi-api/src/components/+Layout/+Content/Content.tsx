import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, NotFound } from "pages";

export interface ContentProps {}

const Content: React.SFC<ContentProps> = () => {
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
