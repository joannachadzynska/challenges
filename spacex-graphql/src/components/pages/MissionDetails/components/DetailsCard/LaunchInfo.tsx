import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { LaunchInfoContainer, InfoTitle } from './styles';

type LaunchInfoProps = Pick<
	LaunchViewModel,
	'launchDateLocal' | 'launchSite' | 'rocket'
>;

const LaunchInfo: React.SFC<LaunchInfoProps> = ({
	launchDateLocal,
	launchSite,
	rocket,
}) => (
	<LaunchInfoContainer>
		<ul>
			<InfoTitle>
				<span>Launch Date:</span>
				{launchDateLocal.toLocaleDateString()}
			</InfoTitle>
			<InfoTitle>
				<span>Launch Site:</span>
				{launchSite.site_name_long}
			</InfoTitle>
			<InfoTitle>
				<span>Rocket Name:</span>
				{rocket.rocketName}
			</InfoTitle>
		</ul>
	</LaunchInfoContainer>
);

export default LaunchInfo;
