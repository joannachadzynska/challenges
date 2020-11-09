import { Card } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import { LaunchViewModel } from './../../../models/launches/viewModels/LaunchViewModel';

type LaunchInfoProps = Pick<
	LaunchViewModel,
	'launchDateLocal' | 'launchSite' | 'rocket' | 'id'
>;

const LaunchInfo: React.SFC<LaunchInfoProps> = ({
	launchDateLocal,
	launchSite,
	rocket,
	id,
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
				<span>
					<Link style={{ marginLeft: 0 }} to={`/vehicle/${id}`}>
						{rocket.rocketName}
					</Link>
				</span>
			</Card.LaunchItem>
		</Card.Launch>
	);
};

export default LaunchInfo;
