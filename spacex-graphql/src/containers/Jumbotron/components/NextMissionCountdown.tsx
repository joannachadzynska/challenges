import { Jumbotron } from 'components';
import { LoadingIndicator } from 'components/shared';
import { LaunchNext } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_NEXT } from 'queries/launchQueries/getLaunch';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import Countdown from './Countdown';

export interface NextMissionCountdownProps {}

const NextMissionCountdown: React.SFC<NextMissionCountdownProps> = () => {
	const { loading, error, data } = useQuery<LaunchNext>(GET_LAUNCH_NEXT);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchNext) return <p>there is not any data to display</p>;

	return (
		<Jumbotron.CountdownContainer>
			<Jumbotron.SubTitle>
				Next mission: <span>{data.launchNext.mission_name}</span>
			</Jumbotron.SubTitle>
			<Countdown {...data?.launchNext} />
		</Jumbotron.CountdownContainer>
	);
};

export default NextMissionCountdown;
