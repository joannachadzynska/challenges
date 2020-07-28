import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { Character } from '../../../helpers/Character';

const CharacterPage: React.SFC = () => {
	const { name } = useParams();
	const state = useSelector((state: RootState) => state);
	const character = new Character(name, state);
	// console.log(character);

	return (
		<>
			{name !== undefined ? (
				<article>
					<h2>{`Name: ${character.name}`}</h2>
				</article>
			) : (
				<h2>nothing to view</h2>
			)}
		</>
	);
};

export default CharacterPage;
