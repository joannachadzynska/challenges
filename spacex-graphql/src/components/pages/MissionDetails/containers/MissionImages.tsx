import React from 'react';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import { ImageGroup, Image } from 'react-fullscreen-image';
import { SectionTitle } from 'styles/SectionTitle';
import { MissionImagesContainer, MissionImage } from './styles';

type MissionImagesProps = Pick<LaunchViewModel, 'links'>;

const MissionImages: React.SFC<MissionImagesProps> = ({ links }) => (
	<section className='container'>
		<SectionTitle>mission images</SectionTitle>

		<ImageGroup>
			<MissionImagesContainer>
				{links.flickr_images.map((image) => (
					<MissionImage key={image}>
						<Image src={image} alt='rocket' />
					</MissionImage>
				))}
			</MissionImagesContainer>
		</ImageGroup>
	</section>
);

export default MissionImages;
