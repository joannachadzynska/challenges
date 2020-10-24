import { Card } from 'components';
import React from 'react';
import { FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';
import { LaunchViewModel } from './../../../models/launches/viewModels/LaunchViewModel';

type HeaderProps = Pick<LaunchViewModel, 'launchSuccess' | 'id'>;

const Header: React.SFC<HeaderProps> = ({ launchSuccess, id }) => {
	return (
		<Card.Header launchSuccess={launchSuccess}>
			{launchSuccess !== null ? (
				<span>
					{launchSuccess ? (
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

			<span>#{id}</span>
		</Card.Header>
	);
};

export default Header;
