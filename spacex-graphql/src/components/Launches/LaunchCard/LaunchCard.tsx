import React from 'react';
import CardImage from '../../Card/CardImage/CardImage';
import CardContent from '../../Card/CardContent/CardContent';
import { LaunchPastViewModel } from '../../../models/LaunchPastViewModel';
import { LaunchPast } from '../../../models/LaunchPast';

const LaunchCard: React.SFC<LaunchPast> = (props) => {
	const data = new LaunchPastViewModel(props);
	return (
		<article>
			<CardImage {...data} />
			<CardContent {...data} />
		</article>
	);
};

export default LaunchCard;
