import React from 'react';
import {
	Button,
	Container,
	Content,
	Date,
	Description,
	Group,
	Header,
	Image,
	ImageContainer,
	TitleLink,
} from './styles/card';

export interface CardComposition {
	Button: React.FC;
	Content: React.FC;
	Date: React.FC;
	Description: React.FC;
	Group: React.FC;
	Header: React.FC<HeaderProps>;
	Image: React.FC<ImageProps>;
	Title: React.FC<TitleProps>;
}

export interface TitleProps {
	to: any;
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

export const CardContent: React.FC = ({ children, ...restProps }) => {
	return <Content {...restProps}>{children}</Content>;
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

export const CardButton: React.FC = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

Card.Button = CardButton;
Card.Content = CardContent;
Card.Date = CardDate;
Card.Description = CardDescription;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Title = CardTitle;

export default Card;
