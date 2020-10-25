import { Card } from 'components';
import React from 'react';
import { setDateToString } from 'utils/date';
import { LaunchViewModel } from './../../../models/launches/viewModels/LaunchViewModel';

type ContentProps = Pick<
	LaunchViewModel,
	'id' | 'launchDateLocal' | 'details' | 'missionName'
>;

const Content: React.SFC<ContentProps> = ({
	details,
	launchDateLocal,
	id,
	missionName,
}) => {
	return (
		<Card.Content direction='rows'>
			<Card.Title to={`/mission/${id}`}>{missionName}</Card.Title>
			<Card.Date>
				<time dateTime={launchDateLocal.toISOString()}>
					{setDateToString(launchDateLocal)}
				</time>
			</Card.Date>
			<Card.Description>
				<p>{details}</p>
			</Card.Description>
		</Card.Content>
	);
};

export default Content;
