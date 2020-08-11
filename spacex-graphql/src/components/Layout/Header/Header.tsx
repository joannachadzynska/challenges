import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../themes/myTheme';
import { NavList } from './styles';

export interface HeaderProps {
	themeMode: string;
	setThemeMode: (mode: string) => void;
}

const Header: React.SFC<HeaderProps> = ({ themeMode, setThemeMode }) => {
	const toggleTheme = () => {
		themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
	};

	return (
		<nav>
			<NavList>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/rockets'>Rockets</Link>
				</li>
				<li>
					<Link to='/launches'>Launches</Link>
				</li>
				<li>
					<Button variant='success' onClick={toggleTheme}>
						change theme
					</Button>
				</li>
			</NavList>
		</nav>
	);
};

export default Header;
