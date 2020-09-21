import React from 'react';
import Routes from 'components/Routing';
import { Wrapper } from 'styles/Wrapper';
import { StyledContent } from './styles';

const Content: React.SFC = () => (
	<StyledContent>
		<Wrapper>
			<Routes />
		</Wrapper>
	</StyledContent>
);

export default Content;
