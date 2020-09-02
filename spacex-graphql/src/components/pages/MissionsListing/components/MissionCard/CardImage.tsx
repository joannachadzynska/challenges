import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { CardImageWrapper, CardImg } from './styles';

type CardImageProps = Pick<LaunchViewModel, 'links' | 'launchSuccess'>;

const CardImage: React.SFC<CardImageProps> = ({ links, launchSuccess }) => (
	<CardImageWrapper launchSuccess={launchSuccess}>
		<CardImg src={links.mission_patch_small} alt='Mission patch small' />
	</CardImageWrapper>
);

export default CardImage;
