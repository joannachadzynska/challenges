import { Card } from 'components';
import { CardProps } from 'components/Card';
import { CardContext } from 'containers/Missions/MissionsContainer';
import React, { useContext, useEffect, useRef } from 'react';
import { Launch } from 'types/launchTypes';
import { Content, Header, Image } from './components';

const CardContainer: React.SFC<Launch & CardProps> = (props) => {
	const ref = useRef<Element>(null);
	const { setCurrentTarget } = useContext(CardContext);
	useEffect(() => {
		setCurrentTarget(ref);
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Card target={ref}>
			<Header {...props} />
			<Image {...props} />
			<Content {...props} />
			<Card.Button to={`/mission/${props.id}`}>More Details</Card.Button>
			<Card.Break />
		</Card>
	);
};

export default CardContainer;
