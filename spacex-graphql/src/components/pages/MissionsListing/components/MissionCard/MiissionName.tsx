import React from 'react';
import { Link } from 'react-router-dom';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';

type MissionNameProps = Pick<LaunchViewModel, 'missionName' | 'id'>;

const MissionName: React.SFC<MissionNameProps> = ({ missionName, id }) => {
	return <Link to={`/mission/${id}`}>{missionName}</Link>;
};

export default MissionName;
