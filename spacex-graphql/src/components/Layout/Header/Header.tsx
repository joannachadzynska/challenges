import React from 'react';
import { Wrapper } from 'styles/Wrapper';
import Logo from './Logo';
import Menu from './Navigation';
import { Navbar, NavbarContainer } from './styles';

const Header: React.SFC = () => (
	<Navbar>
		<Wrapper>
			<NavbarContainer>
				<Logo />
				<Menu />
			</NavbarContainer>
		</Wrapper>
	</Navbar>
);

export default Header;
