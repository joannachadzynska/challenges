import React from "react";
import {
	AppBar,
	Slide,
	Typography,
	useScrollTrigger,
	Toolbar,
} from "@material-ui/core";

export interface HeaderProps {}

function HideOnScroll(props: any) {
	const { children, window } = props;

	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

const Header: React.SFC<HeaderProps> = (props) => {
	return (
		<HideOnScroll {...props}>
			<AppBar>
				<Toolbar>
					<Typography variant='h6'>Characters</Typography>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

export default Header;
