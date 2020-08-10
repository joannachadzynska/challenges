import React from 'react';
import { Link } from 'react-router-dom';
import { RocketViewModel } from '../../../models/RocketViewModel';

type RocketNameProps = Pick<RocketViewModel, 'name' | 'id'>;

const RocketName: React.SFC<RocketNameProps> = ({ name, id }) => (
	<Link to={`/rocket/${id}`}>Name: {name}</Link>
);

export default RocketName;
