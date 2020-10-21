import { useCycle } from 'framer-motion';
import { useDimensions } from 'hooks/useDimensions';
import React, { createContext, useContext, useRef } from 'react';
import { logoAnimation, menuAnimation } from '../../constants';
import * as ROUTES from '../../constants/routes';
import {
	Container,
	Inner,
	LogoBrand,
	LogoIcon,
	LogoLink,
	LogoName,
	Menu,
	MenuBackground,
	MenuGroup,
	MenuHamburger,
	MenuNavItem,
	MotionPath,
	NavbarLink,
} from './styles/header';

export interface HeaderComposition {
	Group: React.FC;
	Logo: React.FC;
	LogoIcon: React.FC;
	LogoName: React.FC;
	Menu: React.FC;
	MenuItem: React.FC<MenuItemProps>;
}

export interface MenuItemProps {
	to: any;
}

const MenuContext: any = createContext(null);

const Path = (props: any) => <MotionPath {...props} />;

const Header: React.FC & HeaderComposition = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
};

export const HeaderLogo: React.FC = ({ children, ...restProps }) => {
	return (
		<LogoLink to={ROUTES.HOME} {...restProps}>
			<LogoBrand>{children}</LogoBrand>
		</LogoLink>
	);
};

export const HeaderLogoIcon: React.FC = ({ children, ...restProps }) => (
	<LogoIcon
		drag
		variants={logoAnimation.svgVariants}
		initial='hidden'
		animate='visible'
		enable-background='new 0 0 24 24'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'>
		{children}
	</LogoIcon>
);

export const HeaderLogoName: React.FC = ({ children, ...restProps }) => (
	<LogoName
		variants={logoAnimation.titleVariants}
		initial='hidden'
		animate='visible'
		{...restProps}>
		{children}
	</LogoName>
);

export const HeaderMenu: React.FC = ({ children, ...restProps }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	return (
		<MenuContext.Provider value={{ isOpen, toggleOpen }}>
			<Menu
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}
				{...restProps}>
				<MenuBackground variants={menuAnimation.sidebar} />
				{children}
				<MenuHamburger onClick={() => toggleOpen()}>
					<svg width='23' height='23' viewBox='0 0 23 23'>
						<Path
							variants={{
								closed: { d: 'M 2 2.5 L 20 2.5' },
								open: { d: 'M 3 16.5 L 17 2.5' },
							}}
						/>
						<Path
							d='M 2 9.423 L 20 9.423'
							variants={{
								closed: { opacity: 1 },
								open: { opacity: 0 },
							}}
							transition={{ duration: 0.1 }}
						/>
						<Path
							variants={{
								closed: { d: 'M 2 16.346 L 20 16.346' },
								open: { d: 'M 3 2.5 L 17 16.346' },
							}}
						/>
					</svg>
				</MenuHamburger>
			</Menu>
		</MenuContext.Provider>
	);
};

export const HeaderGroup: React.FC = ({ children, ...restProps }) => {
	return (
		<MenuGroup variants={menuAnimation.links} {...restProps}>
			{children}
		</MenuGroup>
	);
};

export const HeaderMenuItem: React.FC<MenuItemProps> = ({
	to,
	children,
	...restProps
}) => {
	const { isOpen } = useContext(MenuContext);
	return (
		<MenuNavItem
			variants={menuAnimation.menuItem}
			{...restProps}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			<NavbarLink to={to} open={isOpen}>
				{children}
			</NavbarLink>
		</MenuNavItem>
	);
};

Header.Logo = HeaderLogo;
Header.LogoIcon = HeaderLogoIcon;
Header.LogoName = HeaderLogoName;
Header.Menu = HeaderMenu;
Header.Group = HeaderGroup;
Header.MenuItem = HeaderMenuItem;

export default Header;
