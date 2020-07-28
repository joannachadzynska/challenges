import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink } from '../../shared';

const Starships: React.SFC = () => {
	const starships = useSelector((state: RootState) => state.starships);
	return (
		<CustomList name='Starships'>
			{starships.map((starship) => (
				<li key={starship.name}>
					<CustomLink endpoint='starships' id={starship.name} />
				</li>
			))}
		</CustomList>
	);
};

export default Starships;
