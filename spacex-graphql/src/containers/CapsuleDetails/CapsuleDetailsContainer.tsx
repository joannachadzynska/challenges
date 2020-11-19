import { Video } from 'components';
import { CapsuleDetailsQuery } from 'models/capsules/interfaces/Capsule';
import { GET_CAPSULE_DETAILS } from 'queries/capsuleQueries/getCapsuleDetails';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useParams } from 'react-router-dom';
import { MissionsList, Summary } from './components';

const CapsuleDetailsContainer: React.SFC = () => {
	const { id } = useParams<{ id: string }>();

	const { loading, error, data } = useQuery<CapsuleDetailsQuery>(
		GET_CAPSULE_DETAILS,
		{
			variables: {
				id: id,
			},
		}
	);

	if (loading) return <div>loading ...</div>;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.capsule) return <p>There is no data to display</p>;

	return (
		<section>
			<Video
				bg
				bgSrc='https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'>
				<Video.Placeholder>
					<Video.Title>{`${data.capsule.type} ${data.capsule.id}`}</Video.Title>
				</Video.Placeholder>
			</Video>

			<Summary {...data.capsule} />
			<MissionsList {...data.capsule} />
		</section>
	);
};

export default CapsuleDetailsContainer;
