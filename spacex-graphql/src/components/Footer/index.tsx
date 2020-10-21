import * as React from 'react';
import { Container, Copy } from './styles/footer';

export interface FooterComposition {
	Copyright: React.FC;
}

const Footer: React.SFC & FooterComposition = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export const FooterCopyright: React.FC = ({ children, ...restProps }) => {
	return (
		<Copy {...restProps}>
			&copy; <strong>{children}</strong> {new Date().getFullYear()}
		</Copy>
	);
};

Footer.Copyright = FooterCopyright;

export default Footer;
