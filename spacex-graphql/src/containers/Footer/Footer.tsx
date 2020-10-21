import { Footer } from 'components';
import React from 'react';

export interface FooterContainerProps {}

const FooterContainer: React.SFC<FooterContainerProps> = () => {
	return (
		<Footer>
			<Footer.Copyright>Joanna Chądzyńska</Footer.Copyright>
		</Footer>
	);
};

export default FooterContainer;
