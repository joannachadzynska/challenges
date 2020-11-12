import { Video } from 'components';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';

type VideoContainerProps = Pick<LaunchViewModel, 'missionName' | 'links'>;

const VideoContainer: React.SFC<VideoContainerProps> = ({
	links,
	missionName,
}) => {
	return (
		<Video
			bg
			bgSrc='https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'>
			<Video.Placeholder>
				<Video.Title>{missionName}</Video.Title>
				<Video.PlayButton>Watch Video</Video.PlayButton>
			</Video.Placeholder>

			<Video.Frame
				src={
					links.video_link !== null
						? links.video_link.split('/')[3]
						: 'no video'
				}
			/>
			<Video.CloseButton>Close Video</Video.CloseButton>
		</Video>
	);
};

export default VideoContainer;
