import React from 'react';
import { Rocket } from 'models/rockets/interfaces/Rocket';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import {
	RocketDescription,
	RocketDetailsButton,
	RocketFirstFlight,
	RocketName,
	RocketStatus,
} from './components';
import { RocketCardContainer, RocketCardContent } from './styles';

const RocketCard: React.SFC<Rocket> = (props) => {
	const data = new RocketViewModel(props);

	return (
		<RocketCardContainer>
			<RocketStatus {...data} />

			<RocketCardContent>
				<RocketName {...data} />
				<RocketFirstFlight {...data} />
				<RocketDescription {...data} />
				<RocketDetailsButton {...data} />
			</RocketCardContent>
		</RocketCardContainer>
	);
};

export default RocketCard;
