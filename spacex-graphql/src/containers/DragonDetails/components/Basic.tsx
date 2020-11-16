import { DataList } from 'components';
import React from 'react';
import { DragonViewModel } from './../../../models/dragons/viewModels/DragonViewModel';

type BasicProps = Pick<
	DragonViewModel,
	'firstFlight' | 'active' | 'crewCapacity' | 'diameter' | 'heatShield'
>;

const Basic: React.SFC<BasicProps> = ({
	firstFlight,
	active,
	crewCapacity,
	diameter,
	heatShield,
}) => {
	return (
		<DataList.SubGroup>
			<DataList.SubHeading>BASIC</DataList.SubHeading>

			<DataList.Item>
				<DataList.ItemName>active</DataList.ItemName>
				<DataList.ItemValue>{active ? 'Yes' : 'No'}</DataList.ItemValue>
			</DataList.Item>

			<DataList.Item>
				<DataList.ItemName>crew capacity</DataList.ItemName>
				<DataList.ItemValue>{crewCapacity}</DataList.ItemValue>
			</DataList.Item>

			<DataList.Item>
				<DataList.ItemName>first flight</DataList.ItemName>
				<DataList.ItemValue>{firstFlight}</DataList.ItemValue>
			</DataList.Item>

			<DataList.Item>
				<DataList.ItemName>diameter</DataList.ItemName>
				<DataList.ItemValue>{diameter?.feet} ft</DataList.ItemValue>
			</DataList.Item>

			<DataList.Item>
				<DataList.ItemName>Heat shield material</DataList.ItemName>
				<DataList.ItemValue>{heatShield?.material}</DataList.ItemValue>
			</DataList.Item>
		</DataList.SubGroup>
	);
};

export default Basic;
