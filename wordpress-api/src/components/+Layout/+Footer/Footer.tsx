import * as React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
	return <footer>&copy; Joanna Chądzyńska {new Date().getFullYear()}</footer>;
};

export default Footer;
