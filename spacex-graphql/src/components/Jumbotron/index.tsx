import React from 'react';
import {
	Background,
	Button,
	Container,
	Countdown,
	CountdownContainer,
	CountdownName,
	CountdownTime,
	HeaderContainer,
	Image,
	SubTitle,
	Title,
} from './styles/jumbotron';

export interface JumbotronComposition {
	Button: React.FC;
	Countdown: React.FC;
	CountdownContainer: React.FC;
	CountdownName: React.FC;
	CountdownTime: React.FC;
	Image: React.FC;
	SubTitle: React.FC;
	Title: React.FC;
	Header: React.FC;
}

export interface JumbotronProps {
	bg?: boolean;
}

const Jumbotron: React.SFC<JumbotronProps> & JumbotronComposition = ({
	bg = false,
	children,
	...restProps
}) => {
	return bg ? (
		<Background {...restProps}>
			<Container {...restProps}>{children}</Container>
		</Background>
	) : (
		<Container {...restProps}>{children}</Container>
	);
};

export const JumbotronHeader: React.FC = ({ children, ...restProps }) => {
	return <HeaderContainer {...restProps}>{children}</HeaderContainer>;
};
export const JumbotronTitle: React.FC = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

export const JumbotronSubTitle: React.FC = ({ children, ...restProps }) => {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

export const JumbotronButton: React.FC = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

export const JumbotronImage: React.FC = ({ ...restProps }) => {
	return <Image {...restProps} />;
};

export const JumbotronCountdownContainer: React.FC = ({
	children,
	...restProps
}) => {
	return <CountdownContainer {...restProps}>{children}</CountdownContainer>;
};

export const JumbotronCountdown: React.FC = ({ children, ...restProps }) => {
	return <Countdown {...restProps}>{children}</Countdown>;
};

export const JumbotronCountdownTime: React.FC = ({
	children,
	...restProps
}) => {
	return <CountdownTime {...restProps}>{children}</CountdownTime>;
};

export const JumbotronCountdownName: React.FC = ({
	children,
	...restProps
}) => {
	return <CountdownName {...restProps}>{children}</CountdownName>;
};

Jumbotron.Title = JumbotronTitle;
Jumbotron.SubTitle = JumbotronSubTitle;
Jumbotron.Button = JumbotronButton;
Jumbotron.Countdown = JumbotronCountdown;
Jumbotron.CountdownContainer = JumbotronCountdownContainer;
Jumbotron.CountdownName = JumbotronCountdownName;
Jumbotron.CountdownTime = JumbotronCountdownTime;
Jumbotron.Image = JumbotronImage;
Jumbotron.Header = JumbotronHeader;

export default Jumbotron;
