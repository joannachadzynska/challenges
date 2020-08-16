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
	toggleTheme: () => void;
	theme: string;
}

const Header: React.SFC<HeaderProps> = ({ toggleTheme, theme }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

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
						{window.innerWidth >= 768 ? (
							<Navigation links={links} />
						) : (
							<MenuMobile
								links={links}
								toggle={() => toggleOpen()}
								isOpen={isOpen}
							/>
						)}
						<ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
						<Logo />
					</NavbarContainer>
				</Wrapper>
			</Navbar>
		</StyledHeader>
	);
};

export default Header;
