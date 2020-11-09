import React, { createContext, useContext, useRef, useState } from 'react';
import { Container, Image } from './styles/gallery';

export interface GalleryComposition {
	Image: React.FC<ImageProps>;
}

export interface ImageProps {
	src: any;
	alt?: string;
}

interface GalleryContextProps {
	showImage?: boolean;
	setShowImage?: React.Dispatch<React.SetStateAction<boolean>>;
}

const GalleryContext = createContext<GalleryContextProps>({});

const Gallery: React.SFC & GalleryComposition = ({
	children,
	...restProps
}) => {
	const [showImage, setShowImage] = useState(false);
	return (
		<GalleryContext.Provider value={{ showImage, setShowImage }}>
			<Container {...restProps}>{children}</Container>
		</GalleryContext.Provider>
	);
};

export const GalleryImage: React.FC<ImageProps> = ({ src, ...restProps }) => {
	const { showImage, setShowImage } = useContext<GalleryContextProps>(
		GalleryContext
	);
	const ref = useRef(null);

	const handleShowImage = () => {
		if (setShowImage && ref.current) {
			setShowImage(!showImage);
			console.log(src);
		}
	};

	return (
		<Image onClick={handleShowImage} showFullImage={showImage} ref={ref}>
			<img src={src} {...restProps} alt='rocket' />
		</Image>
	);
};

Gallery.Image = GalleryImage;

export default Gallery;
