import React from 'react';
import { Link } from 'react-router-dom';

export interface CustomLinkProps {
	endpoint: string;
	id: string;
}

const CustomLink: React.SFC<CustomLinkProps> = ({ endpoint, children, id }) => {
	return <Link to={`/${endpoint}/${id}`}>{children}</Link>;
};

export default CustomLink;
