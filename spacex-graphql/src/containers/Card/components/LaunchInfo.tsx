import { Card } from 'components';
import React from 'react';
import { LaunchViewModel } from './../../../models/launches/viewModels/LaunchViewModel';

type LaunchInfoProps = Pick<
	LaunchViewModel,
	'launchDateLocal' | 'launchSite' | 'rocket'
>;

const LaunchInfo: React.SFC<LaunchInfoProps> = ({
	launchDateLocal,
	launchSite,
	rocket,
}) => {
	return (
		<Card.Launch>
			<Card.LaunchItem>
				<span>Launch Date:</span>
				<span>{launchDateLocal.toLocaleDateString()}</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Launch Site:</span>
				<span>{launchSite.site_name_long}</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Rocket Name:</span>
				<span>{rocket.rocketName}</span>
			</Card.LaunchItem>
		</Card.Launch>
	);
};

export default LaunchInfo;
