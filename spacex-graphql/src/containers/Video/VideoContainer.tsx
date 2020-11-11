import { Video } from 'components';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';

type VideoContainerProps = Pick<LaunchViewModel, 'missionName' | 'links'>;

const VideoContainer: React.SFC<VideoContainerProps> = ({
	links,
	missionName,
}) => {
	return (
		<Video bg>
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
