import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink, Card } from '../../shared';
import yoda from '../../../assets/avatars/yoda.png';

const Characters: React.SFC = () => {
	const characters = useSelector((state: RootState) => state.characters);
	characters.sort((a, b) => (a.name > b.name ? 1 : -1));

	console.log(characters);

	return (
		<CustomList name='Characters'>
			{characters.map((character) => (
				<li key={character.name}>
					<CustomLink endpoint='characters' id={character.name}>
						<Card name={character.name} />
					</CustomLink>
				</li>
			))}
		</CustomList>
	);
};

export default Characters;
