import { Close } from 'components/Modal/styles/modal';
import React, { createContext, useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Container, Image, Inner, Overlay } from './styles/gallery';

export interface GalleryComposition {
	Image: React.FC<ImageProps>;
	Modal: React.FC;
}

export interface ImageProps {
	src: any;
	alt?: string;
}

interface GalleryContextProps {
	showImage?: boolean;
	setShowImage?: React.Dispatch<React.SetStateAction<boolean>>;
	image?: string;
	setImage?: React.Dispatch<React.SetStateAction<string>>;
}

const GalleryContext = createContext<GalleryContextProps>({});

const Gallery: React.SFC & GalleryComposition = ({
	children,
	...restProps
}) => {
	const [showImage, setShowImage] = useState(false);
	const [image, setImage] = useState('');
	return (
		<GalleryContext.Provider
			value={{ showImage, setShowImage, image, setImage }}>
			<Container {...restProps}>{children}</Container>
		</GalleryContext.Provider>
	);
};

export const GalleryImage: React.FC<ImageProps> = ({ src, ...restProps }) => {
	const { showImage, setShowImage, setImage } = useContext<GalleryContextProps>(
		GalleryContext
	);
	const ref = useRef(null);

	const handleShowImage = (src: string) => {
		if (setShowImage && ref.current) {
			setShowImage(!showImage);
		}
		if (setImage) {
			setImage(src);
		}
	};

	return (
		<Image
			onClick={() => handleShowImage(src)}
			showFullImage={showImage}
			ref={ref}>
			<figure>
				<img src={src} {...restProps} alt='rocket' />
			</figure>
		</Image>
	);
};

export const GalleryModal: React.FC = ({ children, ...restProps }) => {
	const { showImage, setShowImage, image } = useContext<GalleryContextProps>(
		GalleryContext
	);

	const ref = useRef(null);

	const handleShowImage = () => {
		if (setShowImage && ref.current) {
			setShowImage(!showImage);
		}
	};

	return showImage
		? createPortal(
				<Overlay onClick={handleShowImage} {...restProps} ref={ref}>
					<Inner>
						<img src={image ? image : ''} alt='rocket' />
					</Inner>
					<Close />
				</Overlay>,
				document.body
		  )
		: null;
};

Gallery.Image = GalleryImage;
Gallery.Modal = GalleryModal;

export default Gallery;
