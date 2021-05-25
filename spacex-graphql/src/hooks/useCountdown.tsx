/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { calculateTimeLeft } from 'utils/date';

export const useCountdown = (time: number) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time));

	useEffect(() => {
		const interval = setInterval(
			() => setTimeLeft(calculateTimeLeft(time)),
			1000
		);

		if (timeLeft.difference < 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, []);

	return { timeLeft };
};
