import { Mission, Vehicle, Video } from 'components';
import { DragonDetailsQuery } from 'models/dragons/interfaces/Dragon';
import { GET_DRAGON_DETAILS } from 'queries/dragonQueries/getDragonDetails';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';
import { SectionTitle } from 'styles/SectionTitle';
import { DragonData } from './components';

export interface DragonDetailsContainerProps {}

const DragonDetailsContainer: React.SFC<DragonDetailsContainerProps> = () => {
	const { id } = useParams<{ id: string }>();

	const { loading, error, data } = useQuery<DragonDetailsQuery>(
		GET_DRAGON_DETAILS,
		{
			variables: {
				id: id,
			},
		}
	);

	if (loading) return <div>loading ...</div>;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.dragon) return <p>There is no data to display</p>;

	return (
		<section>
			<Video
				bg
				bgSrc='https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
				<Video.Placeholder>
					<Video.Title>{data.dragon.name}</Video.Title>
				</Video.Placeholder>
			</Video>
			<SectionTitle>Summary</SectionTitle>
			<Mission>
				<Vehicle>
					<Vehicle.Image src={id} type='capsule' hasHeight={false} />
				</Vehicle>

				<DragonData {...data.dragon} />
			</Mission>
		</section>
	);
};

export default DragonDetailsContainer;
