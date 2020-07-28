import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink } from '../../shared';

const Films: React.SFC = () => {
	const films = useSelector((state: RootState) => state.films);
	films.sort((a, b) => (a.title > b.title ? 1 : -1));
	return (
		<CustomList name='Films'>
			{films.map((film) => (
				<li key={film.title}>
					<CustomLink endpoint='films' id={film.title} />
				</li>
			))}
		</CustomList>
	);
};
export default Films;
