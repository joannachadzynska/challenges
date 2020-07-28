import React, { ReactChild } from 'react';
import CustomLink from '../CustomLink';

export interface CustomListProps {
	children: any;
	name: string;
}

const CustomList: React.SFC<CustomListProps> = ({ children, name }) => {
	return (
		<nav>
			<h3>{name} in Star-Wars universe:</h3>
			<ul>{children}</ul>
		</nav>
	);
};

export default CustomList;
