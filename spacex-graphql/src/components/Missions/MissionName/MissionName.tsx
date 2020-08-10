import React from 'react';
import { LaunchPastViewModel } from '../../../models/LaunchPastViewModel';

type MissionNameProps = Pick<
	LaunchPastViewModel,
	'missionName' | 'articleLinks'
>;

const MissionName: React.SFC<MissionNameProps> = ({
	missionName,
	articleLinks,
}) => {
	return (
		<a href={articleLinks} target='blank'>
			<strong>{missionName}</strong>
		</a>
	);
};

export default MissionName;
