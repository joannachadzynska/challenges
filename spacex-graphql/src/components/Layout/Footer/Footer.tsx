import * as React from 'react';
import { Wrapper } from 'styles/Wrapper';
import { StyledFooter } from './styles';

const Footer: React.SFC = () => (
	<StyledFooter>
		<Wrapper>
			<span>
				&copy; <strong>Joanna Chądzyńska</strong> {new Date().getFullYear()}
			</span>
		</Wrapper>
	</StyledFooter>
);

export default Footer;
