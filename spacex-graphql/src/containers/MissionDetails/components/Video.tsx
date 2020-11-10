import VideoContainer from 'containers/Video';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';

const Video: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);
	return (
		<section>
			<VideoContainer {...data} />
		</section>
	);
};

export default Video;
