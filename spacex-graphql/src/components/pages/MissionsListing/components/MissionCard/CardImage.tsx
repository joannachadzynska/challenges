import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';

type CardImageProps = Pick<LaunchViewModel, 'links'>;

const CardImage: React.SFC<CardImageProps> = ({ links }) => {
	return (
		<div>
			<img src={links.mission_patch_small} alt='Mission patch small' />
		</div>
	);
};

export default CardImage;
