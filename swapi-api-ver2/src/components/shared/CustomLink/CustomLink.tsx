import React from 'react';
import { Link } from 'react-router-dom';

export interface CustomLinkProps {
	endpoint: string;
	id: string;
}

const CustomLink: React.SFC<CustomLinkProps> = ({ endpoint, id }) => {
	return <Link to={`/${endpoint}/${id}`}>{id}</Link>;
};

export default CustomLink;
