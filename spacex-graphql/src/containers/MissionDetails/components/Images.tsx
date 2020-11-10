import Gallery from 'components/Gallery';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import * as React from 'react';
import { SectionTitle } from 'styles/SectionTitle';

type ImagesProps = Pick<LaunchViewModel, 'links'>;

const Images: React.SFC<ImagesProps> = ({ links }) => {
	return (
		<section>
			<SectionTitle>mission images</SectionTitle>

			<Gallery>
				{links.flickr_images.length <= 0 ? (
					<p>Sorry, no images available.</p>
				) : (
					links.flickr_images.map((image) => (
						<Gallery.Image key={image} src={image} alt='rocket' />
					))
				)}
			</Gallery>
		</section>
	);
};

export default Images;
