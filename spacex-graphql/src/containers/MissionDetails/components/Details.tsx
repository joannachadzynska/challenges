import { Card, Links } from 'components';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import { GET_MISSION_DETAILS } from 'queries/missionQueries/getMissionDetails';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { FaGlobe, FaTwitter, FaWikipediaW } from 'react-icons/fa';
import { SectionTitle } from 'styles/SectionTitle';
import { MissionQuery } from './../../../models/missions/interfaces/Mission';

const Details: React.SFC<Launch> = (props) => {
	const details = new LaunchViewModel(props);

	const { loading, error, data } = useQuery<MissionQuery>(GET_MISSION_DETAILS, {
		variables: {
			id: details.missionId && details.missionId.toString(),
		},
	});

	if (loading) return <div>loading ...</div>;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data?.mission)
		return (
			<>
				<SectionTitle>mission details</SectionTitle>
				<p>There is no data to display</p>
			</>
		);

	return (
		<section>
			<SectionTitle>mission details</SectionTitle>

			<Card>
				<Card.DetailsContainer>
					<Card.Image />
					<Card.Content>
						<Card.Title>Mission Name: {data.mission.name}</Card.Title>
						<Card.FullDescription>
							{data.mission.description}
						</Card.FullDescription>
					</Card.Content>

					<Links>
						<Links.Item>
							<Links.IconLink href={data.mission.website}>
								<FaGlobe />
								<Links.Name>Website</Links.Name>
							</Links.IconLink>
						</Links.Item>
						<Links.Item>
							<Links.IconLink href={data.mission.twitter}>
								<FaTwitter />
								<Links.Name>Twitter</Links.Name>
							</Links.IconLink>
						</Links.Item>
						<Links.Item>
							<Links.IconLink href={data.mission.wikipedia}>
								<FaWikipediaW />
								<Links.Name>Wikipedia</Links.Name>
							</Links.IconLink>
						</Links.Item>
					</Links>
				</Card.DetailsContainer>
			</Card>
		</section>
	);
};

export default Details;
