import { useEffect, useState } from 'react';

const useInfiniteScroll = (cardsLength?: any) => {
	const [offset, setOffset] = useState(0);
	const [isBottom, setIsBottom] = useState(false);

	const ELEMENTS_LIMIT = 10;

	const handleScroll = () => {
		const scrollTop =
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
		const scrollHeight =
			(document.documentElement && document.documentElement.scrollHeight) ||
			document.body.scrollHeight;

		if (scrollTop + window.innerHeight + 100 >= scrollHeight) {
			setIsBottom(true);
		} else {
			setIsBottom(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!isBottom) return;

		const timeout = setTimeout(() => {
			if (offset <= cardsLength) {
				setOffset((currentValue) => (currentValue += 10));
			} else {
				setOffset(offset);
			}
		}, 2000);

		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isBottom, cardsLength]);

	return {
		setIsBottom,
		offset,
		ELEMENTS_LIMIT,
		isBottom,
		setOffset,
	};
};

export default useInfiniteScroll;
