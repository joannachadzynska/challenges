import React from 'react';
import { LaunchPastViewModel } from '../../../models/LaunchPastViewModel';
import { CardImg, CardImageWrapper } from './styles';

type CardImageProps = Pick<LaunchPastViewModel, 'image'>;

const CardImage: React.SFC<CardImageProps> = ({ image }) => {
	return (
		<CardImageWrapper>
			<CardImg src={image} alt='' />
		</CardImageWrapper>
	);
};

export default CardImage;
