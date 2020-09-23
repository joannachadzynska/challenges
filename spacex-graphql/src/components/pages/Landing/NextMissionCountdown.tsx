import React from 'react';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import { CountdownContainer, Countdown, CountdownTime } from './styles';
import { useCountdown } from 'hooks/useCountdown';

const NextMissionCountdown: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);
	const { timeLeft } = useCountdown(data.launchDateLocal);

	return (
		<CountdownContainer>
			<h2>
				Next Mission: <span>{data.missionName}</span>
			</h2>

			<Countdown>
				<CountdownTime>
					<h1>{timeLeft?.days}</h1>
					<span>days</span>
				</CountdownTime>
				<CountdownTime>
					<h1>{timeLeft.hours}</h1>
					<span>hours</span>
				</CountdownTime>
				<CountdownTime>
					<h1>{timeLeft.minutes}</h1>
					<span>minutes</span>
				</CountdownTime>
				<CountdownTime>
					<h1>{timeLeft.seconds}</h1>
					<span>seconds</span>
				</CountdownTime>
			</Countdown>
		</CountdownContainer>
	);
};

export default NextMissionCountdown;
