import { Card } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
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
	const landpadId = rocket?.firstStage?.cores.map(
		(core) => core.landing_vehicle
	);

	return (
		<Card.Launch>
			<Card.LaunchItem>
				<span>Launch Date:</span>
				<span>{launchDateLocal.toLocaleDateString()}</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Launch Site:</span>
				<span>
					<Link
						style={{ marginLeft: 0 }}
						to={`/launchpad/${launchSite.site_id}`}>
						{launchSite.site_name_long}
					</Link>
				</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Rocket Name:</span>
				<span>
					<Link
						style={{ marginLeft: 0 }}
						to={`/vehicle/rocket/${rocket.rocket.id}`}>
						{rocket.rocketName}
					</Link>
				</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Landing Vehicle:</span>
				<span>
					<Link style={{ marginLeft: 0 }} to={`/landpad/${landpadId}`}>
						{landpadId}
					</Link>
				</span>
			</Card.LaunchItem>
		</Card.Launch>
	);
};

export default LaunchInfo;
