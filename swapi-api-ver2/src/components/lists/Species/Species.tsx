import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink } from '../../shared';

const Species: React.SFC = () => {
	const species = useSelector((state: RootState) => state.species);
	return (
		<CustomList name='Species'>
			{species.map((species) => (
				<li key={species.name}>
					<CustomLink endpoint='species' id={species.name} />
				</li>
			))}
		</CustomList>
	);
};

export default Species;
