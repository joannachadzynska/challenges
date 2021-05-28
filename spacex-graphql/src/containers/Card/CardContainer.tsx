import { Card } from 'components';
import React from 'react';
import { Launch } from 'types/launchTypes';
import { Content, Header, Image } from './components';

const CardContainer: React.SFC<Launch> = (props) => {
	return (
		<Card>
			<Header {...props} />
			<Image {...props} />
			<Content {...props} />
			<Card.Button to={`/mission/${props.id}`}>More Details</Card.Button>
			<Card.Break />
		</Card>
	);
};

export default CardContainer;
