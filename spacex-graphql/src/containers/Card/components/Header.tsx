import { Card } from 'components';
import React from 'react';
import { FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';
import { Launch } from 'types/launchTypes';

const Header: React.SFC<Launch> = ({ success, flight_number }) => {
	return (
		<Card.Header launchSuccess={success}>
			{success ? (
				<span>
					{success ? (
						<>
							<FiCheckCircle size='1.5em' />
							<span>Successful</span>
						</>
					) : (
						<>
							<FiXCircle size='1.5em' />
							<span>Failure</span>
						</>
					)}
				</span>
			) : (
				<span>
					<FiClock size='1.5em' />
					<span>Upcoming</span>
				</span>
			)}

			<span>#{flight_number}</span>
		</Card.Header>
	);
};

export default Header;
