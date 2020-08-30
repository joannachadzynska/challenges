import React from 'react';
import Routes from '../../Routing';

import { StyledContent } from './styles';
import { Wrapper } from '../../../styles/Wrapper';

const Content: React.SFC = () => (
	<StyledContent>
		<Wrapper>
			<Routes />
		</Wrapper>
	</StyledContent>
);

export default Content;
