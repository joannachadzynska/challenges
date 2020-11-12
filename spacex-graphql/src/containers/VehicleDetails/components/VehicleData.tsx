import { DataList } from 'components';
import { Rocket } from 'models/rockets/interfaces/Rocket';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import Basic from './Basic';
import Engines from './Engines';
import Payloads from './Payloads';

const VehicleData: React.SFC<Rocket> = (props) => {
	const data = new RocketViewModel(props);

	return (
		<DataList>
			<p>{data.description}</p>
			<br />
			<DataList.Group>
				<Basic {...data} />
				{/* Engines */}
				<Engines {...data} />
				{/* Payloads */}
				<Payloads {...data} />
			</DataList.Group>
		</DataList>
	);
};

export default VehicleData;
