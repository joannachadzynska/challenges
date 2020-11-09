import React from 'react';
import { Container, IconLink, Item, Name } from './styles/links';

export interface LinksComposition {
	Item: React.FC;
	IconLink: React.FC<IconProps>;
	Name: React.FC;
}

interface IconProps {
	href: string;
}

const Links: React.SFC & LinksComposition = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export const LinksItem: React.FC = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

export const LinksName: React.FC = ({ children, ...restProps }) => {
	return <Name {...restProps}>{children}</Name>;
};

export const LinksIcon: React.FC<IconProps> = ({
	href,
	children,
	...restProps
}) => {
	return (
		<IconLink
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			{...restProps}>
			{children}
		</IconLink>
	);
};

Links.Item = LinksItem;
Links.IconLink = LinksIcon;
Links.Name = LinksName;

export default Links;
