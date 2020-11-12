import { DataList } from 'components';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { setDateToString } from 'utils/date';

type HeightProps = Pick<
	RocketViewModel,
	'diameter' | 'height' | 'mass' | 'stages' | 'firstFlight'
>;

const Basic: React.SFC<HeightProps> = ({
	diameter,
	height,
	mass,
	stages,
	firstFlight,
}) => {
	return (
		<DataList.SubGroup>
			<DataList.SubHeading>Basic</DataList.SubHeading>
			<DataList.Item>
				<DataList.ItemName>first flight</DataList.ItemName>
				<DataList.ItemValue>{setDateToString(firstFlight)}</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>height</DataList.ItemName>
				<DataList.ItemValue>{height?.feet} ft</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>mass</DataList.ItemName>
				<DataList.ItemValue>{mass?.lb} lbs</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>diameter</DataList.ItemName>
				<DataList.ItemValue>{diameter?.feet} ft</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>stages</DataList.ItemName>
				<DataList.ItemValue>{stages}</DataList.ItemValue>
			</DataList.Item>
		</DataList.SubGroup>
	);
};

export default Basic;
