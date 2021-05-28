import { Card } from 'components';
import React from 'react';
import { Launch } from 'types/launchTypes';
import { setDateToString } from 'utils/date';

const Content: React.SFC<Launch> = ({ details, name, date_local, id }) => {
	return (
		<Card.Content direction='rows'>
			<Card.Title to={`/mission/${id}`}>{name}</Card.Title>
			<Card.Date>
				<time dateTime={new Date(date_local).toISOString()}>
					{setDateToString(new Date(date_local))}
				</time>
			</Card.Date>
			<Card.Description>
				<p>{details ? details : 'Mission has no description yet'}</p>
			</Card.Description>
		</Card.Content>
	);
};

export default Content;
