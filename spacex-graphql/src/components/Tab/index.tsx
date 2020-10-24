import React from 'react';
import { Container, Inner, TabLink } from './styles/tab';

export interface TabComposition {
	TabLinkItem: React.FC<LinkProps>;
}

interface LinkProps {
	to: any;
}

const Tab: React.SFC & TabComposition = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
};

export const TabLinkItem: React.FC<LinkProps> = ({
	to,
	children,
	...restProps
}) => {
	return (
		<TabLink to={to} {...restProps}>
			{children}
		</TabLink>
	);
};

Tab.TabLinkItem = TabLinkItem;

export default Tab;
