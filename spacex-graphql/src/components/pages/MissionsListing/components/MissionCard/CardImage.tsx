import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { CardImageWrapper, CardImg } from './styles';

type CardImageProps = Pick<LaunchViewModel, 'links'>;

const CardImage: React.SFC<CardImageProps> = ({ links }) => (
	<CardImageWrapper>
		<CardImg src={links.mission_patch_small} alt='Mission patch small' />
	</CardImageWrapper>
);

export default CardImage;
