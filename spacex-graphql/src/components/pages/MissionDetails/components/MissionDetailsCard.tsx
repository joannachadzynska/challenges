import React from 'react';
import { MissionSuccess } from 'components/pages/MissionsListing/components/MissionCard/components';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import { DetailsImage, DetailsContent, LaunchInfo } from './DetailsCard';
import { CardDetailsContainer, CardMainContainer } from './DetailsCard/styles';

const MissionDetailsCard: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<CardDetailsContainer>
			<MissionSuccess {...data} />

			<CardMainContainer>
				<DetailsImage {...data} />
				<DetailsContent {...data} />
				<LaunchInfo {...data} />
			</CardMainContainer>
		</CardDetailsContainer>
	);
};

export default MissionDetailsCard;
