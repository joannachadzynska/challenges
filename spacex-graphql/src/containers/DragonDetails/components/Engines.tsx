import { DataList } from 'components';
import { DragonViewModel } from 'models/dragons/viewModels/DragonViewModel';
import React from 'react';

type EnginesProps = Pick<DragonViewModel, 'thrusters'>;

const Engines: React.SFC<EnginesProps> = ({ thrusters }) => {
	return (
		<DataList.Group>
			<DataList.Heading>THRUSTERS</DataList.Heading>
			<DataList.Stages>
				{thrusters?.map((thrust) => (
					<DataList.SubGroup key={thrust.type}>
						<DataList.SubHeading>
							{thrust.type.toLocaleUpperCase()}
						</DataList.SubHeading>

						<DataList.Item>
							<DataList.ItemName>amount</DataList.ItemName>
							<DataList.ItemValue>{thrust.amount}</DataList.ItemValue>
						</DataList.Item>

						<DataList.Item>
							<DataList.ItemName>Fuel 1</DataList.ItemName>
							<DataList.ItemValue>{thrust.fuel_1}</DataList.ItemValue>
						</DataList.Item>

						<DataList.Item>
							<DataList.ItemName>fuel 2</DataList.ItemName>
							<DataList.ItemValue>{thrust.fuel_2}</DataList.ItemValue>
						</DataList.Item>

						<DataList.Item>
							<DataList.ItemName>thrust</DataList.ItemName>
							<DataList.ItemValue>{thrust.thrust?.lbf} lbf</DataList.ItemValue>
						</DataList.Item>
					</DataList.SubGroup>
				))}
			</DataList.Stages>
		</DataList.Group>
	);
};

export default Engines;
