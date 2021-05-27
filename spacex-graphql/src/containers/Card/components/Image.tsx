import { Card } from 'components';
import React, { useCallback, useEffect, useState } from 'react';
import { Launch } from 'types/launchTypes';

const Image: React.SFC<Launch> = ({ links }) => {
	const [hasPatch, setHasPatch] = useState(false);
	const [hasFlickrImages, setHasFlickrImages] = useState(false);

	const checkIfItsEmpty = useCallback(() => {
		if (!links) return;
		setHasPatch(!Object.values(links.patch).every((obj) => obj === null));
		setHasFlickrImages(
			!Object.values(links.flickr).every((arr) => arr.length === 0)
		);
	}, [links]);

	useEffect(() => {
		checkIfItsEmpty();
		return () => {};
	}, [checkIfItsEmpty]);

	return (
		<Card.Image
			// src={
			// 	links.flickr ||
			// 	links.patch ||
			// 	links.patch.small
			// 		? links.mission_patch_small
			// 			? links.mission_patch_small
			// 			: links.flickr_images[1]
			// 		: null
			// }
			alt='Mission patch small'
		/>
	);
};

export default Image;
