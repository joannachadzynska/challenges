import { useEffect, useState } from 'react';
import { setInterval } from 'timers';
import { calculateTimeLeft } from 'utils/date';

export const useCountdown = (time: Date) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time));
	useEffect(() => {
		const interval = setInterval(
			() => setTimeLeft(calculateTimeLeft(time)),
			1000
		);

		if (timeLeft.difference < 0) {
			clearInterval(interval);
		}
	}, []);
	return { timeLeft };
};
