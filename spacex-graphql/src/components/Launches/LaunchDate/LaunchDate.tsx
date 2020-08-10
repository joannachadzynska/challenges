import React from 'react';
import { LaunchPastViewModel } from '../../../models/LaunchPastViewModel';

type LaunchDateProps = Pick<LaunchPastViewModel, 'launchDateLocal'>;

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
