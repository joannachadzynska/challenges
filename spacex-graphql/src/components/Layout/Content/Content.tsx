import React from 'react';
import Routes from '../../Routing';
import { Wrapper } from '../../../styles/Wrapper';

export interface ContentProps {}

const Content: React.SFC<ContentProps> = () => (
	<Wrapper>
		<Routes />
	</Wrapper>
);

export default Content;
