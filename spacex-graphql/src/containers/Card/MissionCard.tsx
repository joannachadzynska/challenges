import { Card } from 'components';
import React from 'react';
import { Launch } from 'types/launchTypes';
import { Header } from './components';

const MissionCard: React.SFC<Launch> = (props) => {
	console.log(props);

	return (
		<Card>
			<Header {...props} />

			<Card.DetailsContainer>
				{/* <Image {...data} />
				<ContentFull {...data} />
				<LaunchInfo {...data} /> */}
			</Card.DetailsContainer>
		</Card>
	);
};

export default MissionCard;
