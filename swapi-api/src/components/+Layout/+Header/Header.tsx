import React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	return (
		<nav>
			<ul>
				<li>Articles</li>
			</ul>
		</nav>
	);
};

export default Header;
