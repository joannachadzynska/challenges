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
			<Route component={Characters} path='/characters' />
			<Route component={CharacterPage} path='/characters/:name' />

			<Route component={Films} path='/films' />
			<Route component={FilmPage} path='/films/:title' />

			<Route component={Planets} path='/planets' />
			<Route component={PlanetPage} path='/planets/:name' />

			<Route component={Species} path='/species' />
			<Route component={SpeciesPage} path='/species/:name' />

			<Route component={Starships} path='/starships' />
			<Route component={StarshipPage} path='/starships/:name' />

			<Route component={Vehicles} path='/vehicles' />
			<Route component={VehiclePage} path='/vehicles/:name' />

			<Route component={LandingPage} path='/' />
			<Route component={NotFoundPage} path='*' />

			{/* <Redirect to='/' /> */}
		</Switch>
	);
};

export default Routing;
