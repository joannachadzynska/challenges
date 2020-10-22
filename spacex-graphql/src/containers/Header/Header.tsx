import { Header } from 'components';
import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const HeaderContainer: React.SFC = ({ children }) => {
	return (
		<Header>
			<HeaderLogo />
			<HeaderMenu />
			{children}
		</Header>
	);
};

export default HeaderContainer;
