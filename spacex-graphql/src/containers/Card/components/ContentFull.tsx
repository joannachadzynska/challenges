import { Card } from 'components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Launch } from 'types/launchTypes';
import { setDateToString } from 'utils/date';

const ContentFull: React.SFC<Launch> = ({ id, name, date_local, details }) => {
	const location = useLocation();

	return (
		<Card.Content direction='cols'>
			<Card.Title to={`/mission/${id}`}>{name}</Card.Title>
			<Card.Date>
				<time
				// dateTime={new Date(date_local).toISOString()}
				>
					{setDateToString(new Date(date_local))}
				</time>
			</Card.Date>

			<>
				<Card.Break />
				<Card.FullDescription>
					{details ? details : 'Mission has no description yet'}
				</Card.FullDescription>
			</>

			{location.pathname.includes('/missions') && (
				<>
					<Card.Break />
					<Card.Button isCenter={false} to={`/mission/${id}`}>
						More Details
					</Card.Button>
				</>
			)}
		</Card.Content>
	);
};

export default ContentFull;
