import React, { useEffect, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSWAPIClient } from '../../hooks/useSWAPIClient';
import { importCharactersData } from '../../actions/charactersActions';
import { importFilmsData } from '../../actions/filmsActions';
import { importPlanetsData } from '../../actions/planetsActions';
import { importSpeciesData } from '../../actions/speciesActions';
import { importStarshipsData } from '../../actions/starshipsActions';
import { importVehiclesData } from '../../actions/vehiclesActions';
import Routing from '../Routes';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => {
	const client = useSWAPIClient();
	const dispatch = useDispatch();

	const importDataFromAPI = async (): Promise<void> => {
		const [
			characters,
			films,
			planets,
			species,
			starships,
			vehicles,
		] = await Promise.all([
			client.getCharacters(),
			client.getFilms(),
			client.getPlanets(),
			client.getSpecies(),
			client.getStarships(),
			client.getVehicles(),
		]);

		dispatch(importCharactersData(characters));
		dispatch(importFilmsData(films));
		dispatch(importPlanetsData(planets));
		dispatch(importSpeciesData(species));
		dispatch(importStarshipsData(starships));
		dispatch(importVehiclesData(vehicles));
	};

	useEffect(() => {
		void importDataFromAPI();
	}, [importVehiclesData]);

	return (
		<section className={style()}>
			<Routing />;
		</section>
	);
};
