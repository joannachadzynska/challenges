import React, { ReactChild } from "react";

export interface CustomListProps {
	children: ReactChild;
	name: string;
}

const CustomList: React.SFC<CustomListProps> = ({ children, name }) => {
	return (
		<nav>
			<p>{name} in Star-Wars universe:</p>
			<ul>{children}</ul>
		</nav>
	);
};

export default CustomList;
