import React, { createContext, useContext, useState } from 'react';
import {
	Background,
	CloseButton,
	Container,
	Frame,
	FrameContainer,
	Placeholder,
	PlayButton,
	Title,
} from './styles/video';

export const VideoContext: any = createContext(null);

export interface VideoComposition {
	Frame: React.FC<FrameProps>;
	Title: React.FC;
	PlayButton: React.FC<ButtonProps>;
	CloseButton: React.FC<ButtonProps>;
	Placeholder: React.FC<PlaceholderProps>;
}

export interface VideoProps {
	bg?: boolean;
}

export interface FrameProps {
	show?: boolean;
	src: string;
}

export interface ButtonProps {
	play?: boolean;
}

export interface PlaceholderProps {
	show?: boolean;
}

const Video: React.SFC<VideoProps> & VideoComposition = ({
	bg = false,
	children,
	...restProps
}) => {
	const [showVideo, setShowVideo] = useState(false);
	const [playButton, setPlayButton] = useState(false);

	return bg ? (
		<Background {...restProps} show={showVideo}>
			<VideoContext.Provider
				value={{ showVideo, setShowVideo, playButton, setPlayButton }}>
				<Container>{children}</Container>
			</VideoContext.Provider>
		</Background>
	) : (
		<VideoContext.Provider value={{ showVideo, setShowVideo }}>
			<Container>{children}</Container>
		</VideoContext.Provider>
	);
};

export const VideoTitle: React.FC = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

export const VideoPlayButton: React.FC<ButtonProps> = ({
	children,
	...restProps
}) => {
	const { showVideo, setShowVideo, playButton, setPlayButton } = useContext(
		VideoContext
	);
	return (
		<PlayButton
			onClick={() => setShowVideo(!showVideo)}
			{...restProps}
			show={showVideo}>
			{children}
		</PlayButton>
	);
};

export const VideoCloseButton: React.FC<ButtonProps> = ({
	children,
	...restProps
}) => {
	const { showVideo, setShowVideo, playButton, setPlayButton } = useContext(
		VideoContext
	);
	return (
		<CloseButton
			onClick={() => setShowVideo(!showVideo)}
			{...restProps}
			show={!showVideo}>
			{children}
		</CloseButton>
	);
};

export const VideoFrame: React.FC<FrameProps> = ({
	src,
	children,
	...restProps
}) => {
	const { showVideo } = useContext(VideoContext);
	return (
		<FrameContainer {...restProps}>
			<Frame
				show={showVideo}
				frameBorder='0'
				allowFullScreen
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture'
				title='YouTube video player'
				width='560'
				height='315'
				id='widget2'
				src={`https://www.youtube.com/embed/${src}`}>
				{children}
			</Frame>
		</FrameContainer>
	);
};

export const VideoPlaceholder: React.FC<PlaceholderProps> = ({
	children,
	...restProps
}) => {
	const { showVideo } = useContext(VideoContext);
	return (
		<Placeholder {...restProps} show={showVideo}>
			{children}
		</Placeholder>
	);
};

Video.Title = VideoTitle;
Video.PlayButton = VideoPlayButton;
Video.CloseButton = VideoCloseButton;
Video.Frame = VideoFrame;
Video.Placeholder = VideoPlaceholder;

export default Video;
