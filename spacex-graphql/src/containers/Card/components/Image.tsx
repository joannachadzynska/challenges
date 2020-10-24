import spaceX from 'assets/images/spacex.jpg';
import { Card } from 'components';
import React from 'react';
import { LaunchViewModel } from './../../../models/launches/viewModels/LaunchViewModel';
type ImageProps = Pick<LaunchViewModel, 'links' | 'launchSuccess'>;

const Image: React.SFC<ImageProps> = ({ links, launchSuccess }) => {
	return (
		<Card.Image
			src={
				links.flickr_images.length > 0 ||
				links.mission_patch ||
				links.mission_patch_small
					? links.mission_patch_small
						? links.mission_patch_small
						: links.flickr_images[1]
					: spaceX
			}
			alt='Mission patch small'
		/>
	);
};

export default Image;
