import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink } from '../../shared';

const Planets: React.SFC = () => {
	const planets = useSelector((state: RootState) => state.planets);
	return (
		<CustomList name='Planets'>
			{planets.map((planet) => (
				<li key={planet.name}>
					<CustomLink endpoint='planets' id={planet.name} />
				</li>
			))}
		</CustomList>
	);
};

export default Planets;
