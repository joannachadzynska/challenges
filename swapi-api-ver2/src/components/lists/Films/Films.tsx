import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink, Card } from '../../shared';

const Films: React.SFC = () => {
	const films = useSelector((state: RootState) => state.films);
	films.sort((a, b) => (a.title > b.title ? 1 : -1));
	return (
		<CustomList name='Films'>
			{films.map((film) => (
				<CustomLink endpoint='films' id={film.title} key={film.title}>
					<Card name={film.title} />
				</CustomLink>
			))}
		</CustomList>
	);
};
export default Films;
