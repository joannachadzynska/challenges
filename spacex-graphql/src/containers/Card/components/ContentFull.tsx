import { Card } from 'components';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { useLocation } from 'react-router-dom';
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
	const location = useLocation();

	return (
		<Card.Content direction='cols'>
			<Card.Title to={`/mission/${id}`}>{missionName}</Card.Title>
			<Card.Date>
				<time dateTime={launchDateLocal.toISOString()}>
					{setDateToString(launchDateLocal)}
				</time>
			</Card.Date>
			{details && (
				<>
					<Card.Break />
					<Card.FullDescription>{details}</Card.FullDescription>
				</>
			)}

			{location.pathname.includes('missions') && (
				<>
					<Card.Break />
					<Card.Button to={`/mission/${id}`}>More Details</Card.Button>
				</>
			)}
		</Card.Content>
	);
};

export default ContentFull;
