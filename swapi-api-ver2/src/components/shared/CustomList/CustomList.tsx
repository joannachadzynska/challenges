import React, { ReactChild } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ListStyles } from './List.module.scss';

export interface CustomListProps {
	children: any;
	name: string;
}

const style = bemCssModules(ListStyles);

const CustomList: React.SFC<CustomListProps> = ({ children, name }) => {
	return (
		<nav className={style()}>
			<h3>{name} in Star-Wars universe:</h3>
			<br />
			<ul>{children}</ul>
		</nav>
	);
};

export default CustomList;
