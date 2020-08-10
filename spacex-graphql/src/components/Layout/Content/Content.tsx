import React from 'react';
import Routes from '../../Routing';

export interface ContentProps {}

const Content: React.SFC<ContentProps> = () => {
	return (
		<div>
			<Routes />
		</div>
	);
};

export default Content;
