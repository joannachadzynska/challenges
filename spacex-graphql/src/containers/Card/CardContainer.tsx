import { Card } from 'components';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { Content, Header, Image } from './components';

const CardContainer: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);
	return (
		<Card>
			<Header {...data} />
			<Image {...data} />
			<Content {...data} />
		</Card>
	);
};

export default CardContainer;
