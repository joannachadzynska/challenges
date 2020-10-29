import { Card } from 'components';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { setDateToString } from 'utils/date';

type ContentFullProps = Pick<
	LaunchViewModel,
	'id' | 'launchDateLocal' | 'details' | 'missionName'
>;

const ContentFull: React.SFC<ContentFullProps> = ({
	details,
	launchDateLocal,
	id,
	missionName,
}) => {
	return (
		<Card.Content direction='cols'>
			<Card.Title to={`/mission/${id}`}>{missionName}</Card.Title>
			<Card.Date>
				<time dateTime={launchDateLocal.toISOString()}>
					{setDateToString(launchDateLocal)}
				</time>
			</Card.Date>
			<Card.Break />
			<Card.FullDescription>{details}</Card.FullDescription>
		</Card.Content>
	);
};

export default ContentFull;
