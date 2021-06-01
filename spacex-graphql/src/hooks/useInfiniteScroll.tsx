import { useCallback, useEffect, useState } from 'react';

const useInfiniteScroll = (target: any) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [elementsLimit, setElementsLimit] = useState(10);
	const scrollObserver = useCallback((entries: any) => {
		const target = entries[0];

		if (target.isIntersecting) {
			setIsIntersecting(true);
			setTimeout(() => {
				setElementsLimit((prev) => (prev += 10));
			}, 1000);
		} else {
			setIsIntersecting(false);
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(scrollObserver, {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		});

		if (target && target.current) {
			observer.observe(target.current);
		}
		return () => observer.disconnect();
	}, [target, scrollObserver]);

	return { isIntersecting, elementsLimit };
};

export default useInfiniteScroll;
