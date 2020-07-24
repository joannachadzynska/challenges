import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
	Characters,
	Films,
	Planets,
	Species,
	Starships,
	Vehicles,
} from "../lists";

import {
	CharacterPage,
	FilmPage,
	LandingPage,
	NotFoundPage,
	PlanetPage,
	SpeciesPage,
	StarshipPage,
	VehiclePage,
} from "../pages";

const Routing: React.SFC = () => {
	return (
		<Switch>
			<Route exact component={Characters} path='/characters' />
			<Route exact component={CharacterPage} path='/characters/:name' />

			<Route exact component={Films} path='/films' />
			<Route exact component={FilmPage} path='/films/:title' />

			<Route exact component={Planets} path='/planets' />
			<Route exact component={PlanetPage} path='/planets/:name' />

			<Route exact component={Species} path='/species' />
			<Route exact component={SpeciesPage} path='/species/:name' />

			<Route exact component={Starships} path='/starships' />
			<Route exact component={StarshipPage} path='/starships/:name' />

			<Route exact component={Vehicles} path='/vehicles' />
			<Route exact component={VehiclePage} path='/vehicles/:name' />

			<Route exact component={LandingPage} path='/' />
			<Route exact component={NotFoundPage} path='*' />

			{/* <Redirect to='/' /> */}
		</Switch>
	);
};

export default Routing;
