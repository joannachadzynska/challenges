import { Jumbotron } from 'components';
import { useCountdown } from 'hooks/useCountdown';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { Launch } from './../../../models/launches/interfaces/Launch';

const Countdown: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);
	const { timeLeft } = useCountdown(data.launchDateLocal);

	return (
		<Jumbotron.Countdown>
			<Jumbotron.CountdownTime>
				<Jumbotron.Title>{timeLeft.days}</Jumbotron.Title>
				<Jumbotron.CountdownName>Days</Jumbotron.CountdownName>
			</Jumbotron.CountdownTime>
			<Jumbotron.CountdownTime>
				<Jumbotron.Title>{timeLeft.hours}</Jumbotron.Title>
				<Jumbotron.CountdownName>Hours</Jumbotron.CountdownName>
			</Jumbotron.CountdownTime>
			<Jumbotron.CountdownTime>
				<Jumbotron.Title>{timeLeft.minutes}</Jumbotron.Title>
				<Jumbotron.CountdownName>Minutes</Jumbotron.CountdownName>
			</Jumbotron.CountdownTime>
			<Jumbotron.CountdownTime>
				<Jumbotron.Title>{timeLeft.seconds}</Jumbotron.Title>
				<Jumbotron.CountdownName>Seconds</Jumbotron.CountdownName>
			</Jumbotron.CountdownTime>
		</Jumbotron.Countdown>
	);
};

export default Countdown;
