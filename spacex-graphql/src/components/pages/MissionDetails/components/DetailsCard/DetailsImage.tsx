import React from 'react';

import spaceX from '../../../../../assets/images/spacex.jpg';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { CardDetailsImageWrapper, CardDetailsImage } from './styles';

type DetailsImageProps = Pick<LaunchViewModel, 'links' | 'launchSuccess'>;

const DetailsImage: React.SFC<DetailsImageProps> = ({
	links,
	launchSuccess,
}) => {
	return (
		<CardDetailsImageWrapper launchSuccess={launchSuccess}>
			<CardDetailsImage
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
		</CardDetailsImageWrapper>
	);
};

export default DetailsImage;
