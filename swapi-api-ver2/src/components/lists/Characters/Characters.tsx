import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { Character } from '../../../helpers/Character';
import { CustomList, CustomLink, Card } from '../../shared';

const Characters: React.SFC = () => {
	const characters = useSelector((state: RootState) => state.characters);
	characters.sort((a, b) => (a.name > b.name ? 1 : -1));

	const state = useSelector((state: RootState) => state);

	return (
		<CustomList name='Characters'>
			{characters.map((character) => {
				const characterInfo = new Character(character.name, state);

				return (
					<CustomLink
						endpoint='characters'
						id={character.name}
						key={character.name}>
						<Card
							name={character.name}
							details={
								characterInfo.species.length > 0
									? characterInfo.species[0]
									: 'unknown'
							}
							subtitle='Species'
						/>
					</CustomLink>
				);
			})}
		</CustomList>
	);
};

export default Characters;
