import { Card } from 'components';
import React from 'react';
import { FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';
import { Launch } from 'types/launchTypes';

const Header: React.SFC<Launch> = ({ success, flight_number, upcoming }) => {
	return (
		<Card.Header launchSuccess={success}>
			{success ? (
				<span>
					<FiCheckCircle size='1.5em' />
					<span>Successful</span>
				</span>
			) : upcoming ? (
				<span>
					<FiClock size='1.5em' />
					<span>Upcoming</span>
				</span>
			) : (
				<span>
					<FiXCircle size='1.5em' />
					<span>Failure</span>
				</span>
			)}

			<span>#{flight_number}</span>
		</Card.Header>
	);
};

export default Header;
