import { Vehicle, Video } from 'components';
import { LoadingIndicator } from 'components/shared';
import { Rockets } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKETS } from 'queries/rocketQueries/getRockets';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SectionTitle } from 'styles/SectionTitle';

const VehiclesContainer: React.SFC = () => {
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
			<SectionTitle>Rockets</SectionTitle>
			<Vehicle.Description>
				The rockets below are the past, current and yet to be active vehicles in
				the SpaceX lineup. The proportion of the rockets are approximate but
				somewhat accurate in their relative scale. As vehicles become available,
				they will be added here for reference.
			</Vehicle.Description>

			<Vehicle.Group>
				{data.rockets.map((rocket) => (
					<Vehicle.Lineup key={rocket.id}>
						<Vehicle.Name>{rocket.name}</Vehicle.Name>

						<Vehicle>
							<Vehicle.Image src={rocket.id} />
						</Vehicle>

						<Vehicle.Link to={`/vehicle/${rocket.id}`}>
							Rocket Stats
						</Vehicle.Link>
					</Vehicle.Lineup>
				))}
			</Vehicle.Group>
		</section>
	);
};

export default VehiclesContainer;
