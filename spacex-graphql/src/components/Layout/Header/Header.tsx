import React, { useRef } from 'react';
import { useCycle } from 'framer-motion';
import { useDimensions } from '../../../hooks/useDimensions';
import { MenuMobile } from './MenuMobile';
import { Navigation } from './Menu';
import { Navbar, NavbarContainer, StyledHeader } from './styles';
import { Wrapper } from '../../../styles/Wrapper';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

export interface HeaderProps {
	themeMode: string;
	setThemeMode: (mode: string) => void;
}

const Header: React.SFC<HeaderProps> = ({ themeMode, setThemeMode }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
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
			<Navbar
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}>
				<Wrapper>
					<NavbarContainer>
						<Logo />

						<Navigation links={links} />
						{/* <MenuMobile links={links} toggle={() => toggleOpen()} /> */}
						<ThemeSwitch switchTheme={toggleTheme} />
					</NavbarContainer>
				</Wrapper>
			</Navbar>
		</StyledHeader>
	);
};

export default Header;
