import { Card } from 'components';
import React from 'react';
import { Launch } from 'types/launchTypes';
import { ContentFull, Header, Image, LaunchInfo } from './components';

const MissionCard: React.SFC<Launch> = (props) => {
	return (
		<Card>
			<Header {...props} />

			<Card.DetailsContainer>
				<Image {...props} />
				<ContentFull {...props} />
				<LaunchInfo {...props} />
			</Card.DetailsContainer>
		</Card>
	);
};

export default MissionCard;
