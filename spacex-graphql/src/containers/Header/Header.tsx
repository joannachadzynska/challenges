import { Header } from 'components';
import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const HeaderContainer: React.SFC = () => {
	return (
		<Header>
			<HeaderLogo />
			<HeaderMenu />
		</Header>
	);
};

export default HeaderContainer;
