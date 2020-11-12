import { Mission, Vehicle, Video } from 'components';
import { RocketDetailsQuery } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKET_DETAILS } from 'queries/rocketQueries/getRocketDetails';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';
import { VehicleData } from './components';

const VehicleDetails: React.SFC = () => {
	const { id } = useParams<{ id: string }>();

	const { loading, error, data } = useQuery<RocketDetailsQuery>(
		GET_ROCKET_DETAILS,
		{
			variables: {
				id: id,
			},
		}
	);

	if (loading) return <div>loading ...</div>;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.rocket) return <p>There is no data to display</p>;

	return (
		<section>
			<Video
				bg
				bgSrc='https://images.pexels.com/photos/586106/pexels-photo-586106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
				<Video.Placeholder>
					<Video.Title>{data.rocket.name}</Video.Title>
				</Video.Placeholder>
			</Video>

			<Mission>
				<Vehicle>
					<Vehicle.Image src={id} hasHeight={false} />
				</Vehicle>
				<VehicleData {...data.rocket} />
			</Mission>
		</section>
	);
};

export default VehicleDetails;
