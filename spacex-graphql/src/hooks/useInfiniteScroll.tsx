import { useEffect, useState } from 'react';

const useInfiniteScroll = (callback?: any) => {
	const [offset, setOffset] = useState(0);
	const [isBottom, setIsBottom] = useState(false);

	const ELEMENTS_LIMIT = 10;

	const handleOffset = () => {
		setOffset((currentValue) => (currentValue += 10));
	};

	const handleScroll = () => {
		const scrollTop =
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
		const scrollHeight =
			(document.documentElement && document.documentElement.scrollHeight) ||
			document.body.scrollHeight;

		if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
			setIsBottom(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!isBottom) return;
		handleOffset();
		// callback();
	}, [isBottom]);

	return {
		handleOffset,
		setIsBottom,
		offset,
		ELEMENTS_LIMIT,
		isBottom,
		setOffset,
	};
};

export default useInfiniteScroll;
