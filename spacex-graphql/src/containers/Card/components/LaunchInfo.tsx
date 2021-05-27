import { useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { selectLaunchpadById } from 'features/launchpads/launchpadsSlice';
import React from 'react';
import { Link } from 'react-router-dom';
import { Launch } from 'types/launchTypes';
import { selectRocketById } from './../../../features/rockets/rocketSlice';

const LaunchInfo: React.SFC<Launch> = ({ rocket, launchpad, date_utc }) => {
	const launchpadDetails = useAppSelector(selectLaunchpadById(launchpad));
	const rocketDetails = useAppSelector(selectRocketById(rocket));

	return (
		<Card.Launch>
			<Card.LaunchItem>
				<span>Launch Date:</span>
				<span>{new Date(date_utc).toLocaleDateString()}</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Launch Site:</span>
				<span>
					<Link style={{ marginLeft: 0 }} to={`/launchpad/${launchpad}`}>
						{launchpadDetails?.name}
					</Link>
				</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Rocket Name:</span>
				<span>
					<Link style={{ marginLeft: 0 }} to={`/vehicle/rocket/${rocket}`}>
						{rocketDetails?.name}
					</Link>
				</span>
			</Card.LaunchItem>
			<Card.LaunchItem>
				<span>Landing Vehicle:</span>
				<span>
					{/* <Link style={{ marginLeft: 0 }} to={`/landpad/${landpadId}`}>
						{landpadId}
					</Link> */}
				</span>
			</Card.LaunchItem>
		</Card.Launch>
	);
};

export default LaunchInfo;
