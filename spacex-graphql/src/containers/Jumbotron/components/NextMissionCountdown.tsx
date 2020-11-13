import { Jumbotron } from 'components';
import { LoadingIndicator } from 'components/shared';
import { LaunchNext } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_NEXT } from 'queries/launchQueries/getLaunch';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import Countdown from './Countdown';

const NextMissionCountdown: React.SFC = () => {
	const { loading, error, data } = useQuery<LaunchNext>(GET_LAUNCH_NEXT);
	const [nextLaunch, setNextLaunch] = useState<LaunchNext>();

	useEffect(() => {
		if (data?.launchNext) {
			setNextLaunch(data);
		}
		return () => setNextLaunch(undefined);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchNext) return <p>there is not any data to display</p>;

	return (
		<Jumbotron.CountdownContainer>
			<Jumbotron.SubTitle>
				Next mission: <span>{nextLaunch?.launchNext.mission_name}</span>
			</Jumbotron.SubTitle>
			<br />
			<Countdown {...data.launchNext} />
		</Jumbotron.CountdownContainer>
	);
};

export default NextMissionCountdown;
