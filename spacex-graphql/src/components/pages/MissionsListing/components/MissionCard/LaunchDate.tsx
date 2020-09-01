import React from 'react';
import { LaunchViewModel } from '../../../../../models/launches/viewModels/LaunchViewModel';

type LaunchDateProps = Pick<LaunchViewModel, 'launchDateLocal'>;

const LaunchDate: React.SFC<LaunchDateProps> = ({ launchDateLocal }) => {
	return (
		<p>
			Mission date: &nbsp;
			<time dateTime={launchDateLocal.toISOString()}>
				{launchDateLocal.toLocaleDateString()}
			</time>
		</p>
	);
};

export default LaunchDate;
