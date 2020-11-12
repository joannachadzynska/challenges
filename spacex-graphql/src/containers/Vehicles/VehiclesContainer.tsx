import { Video } from 'components';
import { LoadingIndicator } from 'components/shared';
import { Rockets } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKETS } from 'queries/rocketQueries/getRockets';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';

export interface VehiclesContainerProps {}

const VehiclesContainer: React.SFC<VehiclesContainerProps> = () => {
	const { loading, error, data } = useQuery<Rockets>(GET_ROCKETS);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.rockets) return <p>there is not any data to display</p>;

	return (
		<section>
			<Video
				bg
				bgSrc='https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
				<Video.Placeholder>
					<Video.Title>ROCKETS</Video.Title>
				</Video.Placeholder>
			</Video>
		</section>
	);
};

export default VehiclesContainer;
