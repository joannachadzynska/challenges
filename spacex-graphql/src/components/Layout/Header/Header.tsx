import React from 'react';
import { Navbar, NavbarContainer } from './styles';
import { Wrapper } from '../../../styles/Wrapper';
import Logo from './Logo';
import Menu from './Navigation';

export interface HeaderProps {
	toggleTheme?: () => void;
	theme?: string;
}

const Header: React.SFC<HeaderProps> = () => (
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
