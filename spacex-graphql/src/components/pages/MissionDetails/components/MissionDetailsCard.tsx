import React from 'react';
import MissionSuccess from '../../MissionsListing/components/MissionCard/MissionSuccess';
import { LaunchViewModel } from '../../../../models/launches/viewModels/LaunchViewModel';
import { Launch } from '../../../../models/launches/interfaces/Launch';
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
