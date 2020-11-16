import { DataList } from 'components';
import { Dragon } from 'models/dragons/interfaces/Dragon';
import { DragonViewModel } from 'models/dragons/viewModels/DragonViewModel';
import React from 'react';
import Basic from './Basic';
import Engines from './Engines';
import Payloads from './Payloads';

const DragonData: React.SFC<Dragon> = (props) => {
	const data = new DragonViewModel(props);

	return (
		<DataList>
			<p>{data.description}</p>
			<br />
			<DataList.Group>
				<Basic {...data} />
				{/* Thrusters */}
				<br />
				<Engines {...data} />
				<br />
				{/* Payloads mass */}
				<Payloads {...data} />
			</DataList.Group>
		</DataList>
	);
};

export default DragonData;
