import { useState } from 'react';

export const useInfiniteScroll = (initOffset: number) => {
	const [offset, setOffset] = useState(initOffset);

	const ELEMENTS_LIMIT = 10;

	const handleOffset = () =>
		setOffset((currentValue) => (currentValue += ELEMENTS_LIMIT));

	return { handleOffset, offset, ELEMENTS_LIMIT };
};
