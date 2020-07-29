import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink, Card } from '../../shared';

const Planets: React.SFC = () => {
	const planets = useSelector((state: RootState) => state.planets);
	planets.sort((a, b) => (a.name > b.name ? 1 : -1));
	return (
		<CustomList name='Planets'>
			{planets.map((planet) => (
				<CustomLink endpoint='planets' id={planet.name} key={planet.name}>
					<Card name={planet.name} />
				</CustomLink>
			))}
		</CustomList>
	);
};

export default Planets;
