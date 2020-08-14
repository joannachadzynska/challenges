import React from 'react';
import {
	Navbar,
	NavbarContainer,
	NavbarLink,
	NavbarLinks,
	StyledHeader,
} from './styles';
import { Wrapper } from '../../../styles/Wrapper';
import MotionLink from './MotionLink';
import Logo from './Logo';
import { Button } from '../../shared/Button/styles';
import ThemeSwitch from './ThemeSwitch';

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
		<StyledHeader>
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

								<ThemeSwitch switchTheme={toggleTheme} />
								{/* <Button
									variant='success'
									onClick={toggleTheme}
									style={{ marginLeft: 10 }}
									whileHover={{
										scale: 1.1,
									}}
									transition={{ type: 'spring', stiffness: 50 }}>
									Toggle Theme
								</Button> */}
							</ul>
						</NavbarLinks>
					</NavbarContainer>
				</Wrapper>
			</Navbar>
		</StyledHeader>
	);
};

export default Header;
