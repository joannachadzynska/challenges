import React from 'react';
import { Button } from '../../../themes/myTheme';
import { Navbar, NavbarContainer, NavbarLink, NavbarLinks } from './styles';
import { Wrapper } from '../../../styles/Wrapper';
import MotionLink from './MotionLink';
import Logo from './Logo';

export interface HeaderProps {
	themeMode: string;
	setThemeMode: (mode: string) => void;
}

const Header: React.SFC<HeaderProps> = ({ themeMode, setThemeMode }) => {
	const toggleTheme = () => {
		themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
	};

	const links = [
		{ id: 'home', path: '/', name: 'Home' },
		{ id: 'about', path: '/about', name: 'About' },
		{ id: 'rockets', path: '/rockets', name: 'Rockets' },
		{ id: 'launches', path: '/launches', name: 'Launches' },
	];

	return (
		<Navbar>
			<Wrapper>
				<NavbarContainer>
					<Logo />
					<NavbarLinks>
						<ul>
							{links.map((link) => (
								<MotionLink key={link.id}>
									<NavbarLink to={link.path}>{link.name}</NavbarLink>
								</MotionLink>
							))}

							<li>
								<Button variant='success' onClick={toggleTheme}>
									Toggle Theme
								</Button>
							</li>
						</ul>
					</NavbarLinks>
				</NavbarContainer>
			</Wrapper>
		</Navbar>
	);
};

export default Header;
