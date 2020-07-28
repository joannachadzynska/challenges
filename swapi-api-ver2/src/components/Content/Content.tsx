import React, { useEffect, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSWAPIClient } from '../../hooks/useSWAPIClient';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyles } from './Content.module.scss';
import Routing from '../Routes';

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => {
	const client = useSWAPIClient();
	const dispatch = useDispatch();

	const importDataFromAPI = async (): Promise<void> => {
		const [
			characters,
			films,
			starships,
			species,
			vehicles,
			planets,
		] = await Promise.all([
			client.getCharacters(),
			client.getFilms(),
			client.getStarships(),
			client.getSpecies(),
			client.getVehicles(),
			client.getPlanets(),
		]);

		console.log(characters);
		console.log(films);
		console.log(starships);
	};

	useEffect(() => {
		void importDataFromAPI();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={style()}>
			{/* <Route component={Table} path='/' /> */}
			<Routing />
		</section>
	);
};
