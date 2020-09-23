import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { LoadingIndicator } from 'components/shared';
import { LaunchNext } from 'models/launches/interfaces/Launch';
import { GET_LAUNCH_NEXT } from 'queries/launchQueries/getLaunch';

import { Button } from 'styles/Button';
import NextMissionCountdown from './NextMissionCountdown';
import { LandingContainer, LandingHeader } from './styles';

const Landing: React.SFC = () => {
	const { loading, error, data } = useQuery<LaunchNext>(GET_LAUNCH_NEXT);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.launchNext) return <p>there is not any data to display</p>;

	return (
		<LandingContainer>
			<LandingHeader>
				<h1>
					Space X <br />
					Guider
				</h1>
				<h2>guide web for you</h2>
			</LandingHeader>
			<NextMissionCountdown {...data.launchNext} />
			<Button fontSize='1.5'>Explore</Button>
		</LandingContainer>
	);
};

export default Landing;
