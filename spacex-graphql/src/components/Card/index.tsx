import React from 'react';
import {
	Break,
	Button,
	Container,
	Content,
	Date,
	Description,
	DetailsContainer,
	FullDescription,
	Group,
	Header,
	Image,
	ImageContainer,
	LaunchContainer,
	LaunchItem,
	TitleLink,
} from './styles/card';

export interface CardComposition {
	Break: React.FC;
	Button: React.FC<ButtonProps>;
	Content: React.FC<ContentProps>;
	Date: React.FC;
	Description: React.FC;
	DetailsContainer: React.FC;
	FullDescription: React.FC;
	Group: React.FC;
	Header: React.FC<HeaderProps>;
	Image: React.FC<ImageProps>;
	Launch: React.FC;
	LaunchItem: React.FC;
	Title: React.FC<TitleProps>;
}

export interface TitleProps {
	to: any;
}

export interface ButtonProps {
	to: any;
}

export interface ContentProps {
	direction?: 'cols' | 'rows';
}

export interface ImageProps {
	src: any;
	alt?: string;
}

export interface HeaderProps {
	launchSuccess: boolean | undefined | null;
}

const Card: React.SFC & CardComposition = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export const CardGroup: React.FC = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};

export const CardBreak: React.FC = ({ ...restProps }) => {
	return <Break {...restProps} />;
};

export const CardHeader: React.FC<HeaderProps> = ({
	launchSuccess,
	children,
	...restProps
}) => {
	return (
		<Header {...restProps} launchSuccess={launchSuccess}>
			{children}
		</Header>
	);
};

export const CardImage: React.FC<ImageProps> = ({ src, ...restProps }) => {
	return (
		<ImageContainer>
			<Image src={src} {...restProps} />
		</ImageContainer>
	);
};

export const CardContent: React.FC<ContentProps> = ({
	children,
	direction,
	...restProps
}) => {
	return (
		<Content {...restProps} direction={direction}>
			{children}
		</Content>
	);
};

export const CardDetailsContainer: React.FC = ({ children, ...restProps }) => {
	return <DetailsContainer {...restProps}>{children}</DetailsContainer>;
};

export const CardTitle: React.FC<TitleProps> = ({
	children,
	to,
	...restProps
}) => {
	return (
		<TitleLink to={to} {...restProps}>
			{children}
		</TitleLink>
	);
};

export const CardDate: React.FC = ({ children, ...restProps }) => {
	return <Date {...restProps}>{children}</Date>;
};

export const CardDescription: React.FC = ({ children, ...restProps }) => {
	return <Description {...restProps}>{children}</Description>;
};

export const CardFullDescription: React.FC = ({ children, ...restProps }) => {
	return <FullDescription {...restProps}>{children}</FullDescription>;
};

export const CardButton: React.FC<ButtonProps> = ({
	to,
	children,
	...restProps
}) => {
	return (
		<Button to={to} {...restProps}>
			{children}
		</Button>
	);
};

export const CardLaunch: React.FC = ({ children, ...restProps }) => {
	return <LaunchContainer {...restProps}>{children}</LaunchContainer>;
};
export const CardLaunchItem: React.FC = ({ children, ...restProps }) => {
	return <LaunchItem {...restProps}>{children}</LaunchItem>;
};

Card.Break = CardBreak;
Card.Button = CardButton;
Card.Content = CardContent;
Card.Date = CardDate;
Card.Description = CardDescription;
Card.DetailsContainer = CardDetailsContainer;
Card.FullDescription = CardFullDescription;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Launch = CardLaunch;
Card.LaunchItem = CardLaunchItem;
Card.Title = CardTitle;

export default Card;
