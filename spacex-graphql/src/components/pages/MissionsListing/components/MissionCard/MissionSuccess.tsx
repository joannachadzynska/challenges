import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { CardHeader } from './styles';

type MissionSuccessProps = Pick<LaunchViewModel, 'launchSuccess' | 'id'>;

const MissionSuccess: React.SFC<MissionSuccessProps> = ({
	launchSuccess,
	id,
}) => (
	<CardHeader launchSuccess={launchSuccess}>
		<span>
			{launchSuccess ? (
				<>
					<FiCheckCircle size='1.5em' />
					<span>Success</span>
				</>
			) : (
				<>
					<FiXCircle size='1.5em' />
					<span>Failure</span>
				</>
			)}
		</span>

		<span>#{id}</span>
	</CardHeader>
);

export default MissionSuccess;