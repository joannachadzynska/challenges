import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink } from '../../shared';

const Characters: React.SFC = () => {
	const characters = useSelector((state: RootState) => state.characters);
	return (
		<CustomList name='Characters'>
			{characters.map((character) => (
				<li key={character.name}>
					<CustomLink endpoint='characters' id={character.name} />
				</li>
			))}
		</CustomList>
	);
};

export default Characters;
