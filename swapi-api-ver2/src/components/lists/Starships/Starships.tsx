import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink, Card } from '../../shared';

const Starships: React.SFC = () => {
	const starships = useSelector((state: RootState) => state.starships);
	starships.sort((a, b) => (a.name > b.name ? 1 : -1));
	return (
		<CustomList name='Starships'>
			{starships.map((starship) => (
				<CustomLink endpoint='starships' id={starship.name} key={starship.name}>
					<Card name={starship.name} />
				</CustomLink>
			))}
		</CustomList>
	);
};

export default Starships;
