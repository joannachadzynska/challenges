import { useCallback, useEffect, useState } from 'react';

export const useCountdown = (time: number) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const countDownDate = new Date(time * 1000).getTime();
	const now = new Date().getTime();
	const distance = countDownDate - now;

	const countdown = useCallback(() => {
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		setTimeLeft({
			days,
			hours,
			minutes,
			seconds,
		});

		if (distance < 0) {
			setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		}
	}, [distance]);

	useEffect(() => {
		const interval = setInterval(countdown, 1000);
		if (distance < 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [countdown, distance]);

	return timeLeft;
};
