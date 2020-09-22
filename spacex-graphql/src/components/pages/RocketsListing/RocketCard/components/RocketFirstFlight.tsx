import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { setDateToString } from 'utils/date';
import { StyledFirstFlight } from '../styles';

type RocketFirstFlightProps = Pick<RocketViewModel, 'firstFlight'>;

const RocketFirstFlight: React.SFC<RocketFirstFlightProps> = ({
	firstFlight,
}) => (
	<StyledFirstFlight>
		First flight:
		<time dateTime={firstFlight?.toISOString()}>
			{setDateToString(firstFlight)}
		</time>
	</StyledFirstFlight>
);

export default RocketFirstFlight;
