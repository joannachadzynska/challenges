import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface RocketDetailsProps {}

const RocketDetails: React.SFC<RocketDetailsProps> = () => {
	const { id } = useParams();
	console.log(id);

	return <div>RocketDetails</div>;
};

export default RocketDetails;
