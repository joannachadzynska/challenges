import { Video } from 'components';
import React from 'react';
import { DragonsSection, RocketsSection } from './components';

const VehiclesContainer: React.SFC = () => {
	return (
		<section>
			<Video
				bg
				bgSrc='https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
				<Video.Placeholder>
					<Video.Title>VEHICLES</Video.Title>
				</Video.Placeholder>
			</Video>
			<RocketsSection />
			<DragonsSection />
		</section>
	);
};

export default VehiclesContainer;
