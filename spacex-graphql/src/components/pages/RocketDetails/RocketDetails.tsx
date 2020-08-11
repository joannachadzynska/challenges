import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface RocketDetailsProps {}

const RocketDetails: React.SFC<RocketDetailsProps> = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div>
			RocketDetails{' '}
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
				commodi hic, iusto inventore saepe ipsum ad, ipsa numquam rerum quasi
				iste libero. Expedita magni dolorum exercitationem veritatis sit
				delectus aut amet ad consequatur deserunt possimus sint veniam tempora,
				error itaque suscipit odit dolores explicabo. Quidem, consequuntur.
				Obcaecati ab tempora deleniti?
			</p>
		</div>
	);
};

export default RocketDetails;
