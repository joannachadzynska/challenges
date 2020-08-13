import * as React from 'react';
import { StyledFooter } from './styles';
import { Wrapper } from '../../../styles/Wrapper';

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
