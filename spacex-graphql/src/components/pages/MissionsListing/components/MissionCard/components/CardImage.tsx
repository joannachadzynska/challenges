import React from 'react';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import { CardImageWrapper, CardImg } from '../styles';
import spaceX from 'assets/images/spacex.jpg';

type CardImageProps = Pick<LaunchViewModel, 'links' | 'launchSuccess'>;

const CardImage: React.SFC<CardImageProps> = ({ links, launchSuccess }) => {
	return (
		<CardImageWrapper launchSuccess={launchSuccess}>
			<CardImg
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
		</CardImageWrapper>
	);
};

export default CardImage;
