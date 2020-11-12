import { DataList } from 'components';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';

type EnginesProps = Pick<RocketViewModel, 'engines'>;

const Engines: React.SFC<EnginesProps> = ({ engines }) => {
	return (
		<DataList.SubGroup>
			<DataList.SubHeading>Engines</DataList.SubHeading>
			<DataList.Item>
				<DataList.ItemName>number</DataList.ItemName>
				<DataList.ItemValue>{engines?.number}</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>type</DataList.ItemName>
				<DataList.ItemValue>{engines?.type}</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>thrust</DataList.ItemName>
				<DataList.ItemValue>
					{engines?.thrust_sea_level.lbf} lbf
				</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>layout</DataList.ItemName>
				<DataList.ItemValue>{engines?.layout}</DataList.ItemValue>
			</DataList.Item>
		</DataList.SubGroup>
	);
};

export default Engines;
