import { Card } from 'components';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { Launch } from './../../models/launches/interfaces/Launch';
import { ContentFull, Header, Image, LaunchInfo } from './components';

const MissionCard: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);
	return (
		<Card>
			<Header {...data} />

			<Card.DetailsContainer>
				<Image {...data} />
				<ContentFull {...data} />
				<LaunchInfo {...data} />
			</Card.DetailsContainer>
		</Card>
	);
};

export default MissionCard;
