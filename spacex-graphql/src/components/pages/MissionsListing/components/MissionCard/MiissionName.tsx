import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { MissionTitleLink } from './styles';

type MissionNameProps = Pick<LaunchViewModel, 'missionName' | 'id'>;

const MissionName: React.SFC<MissionNameProps> = ({ missionName, id }) => (
	<MissionTitleLink to={`/mission/${id}`}>{missionName}</MissionTitleLink>
);

export default MissionName;
