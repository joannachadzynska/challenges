import React from 'react';
import Routes from '../../Routing';

import { StyledContent } from './styles';
import { Wrapper } from '../../../styles/Wrapper';

const Content: React.SFC = () => (
	<Wrapper>
		<StyledContent>
			<Routes />
		</StyledContent>
	</Wrapper>
);

export default Content;
