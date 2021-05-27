import { useAppSelector } from 'app/hooks';
import { Jumbotron } from 'components';
import { useCountdown } from 'hooks/useCountdown';
import React from 'react';

const Countdown: React.SFC = () => {
	const nextMission = useAppSelector((state) => state.launches.launchNext);
	const timeLeft = useCountdown(nextMission.date_unix);

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
