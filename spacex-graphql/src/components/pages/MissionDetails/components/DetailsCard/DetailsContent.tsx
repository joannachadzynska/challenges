import React from 'react';
import MissionName from '../../../MissionsListing/components/MissionCard/MiissionName';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import DetailsLaunchDescription from './DetailsLaunchDescription';
import { CardDetailsContentContainer } from './styles';

type DetailsContentProps = Omit<LaunchViewModel, 'image'>;

const DetailsContent: React.SFC<DetailsContentProps> = (props) => {
	return (
		<CardDetailsContentContainer>
			<MissionName {...props} />
			<DetailsLaunchDescription {...props} />
		</CardDetailsContentContainer>
	);
};

export default DetailsContent;
