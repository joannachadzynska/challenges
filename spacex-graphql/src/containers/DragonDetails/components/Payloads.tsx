import { DataList } from 'components';
import { DragonViewModel } from 'models/dragons/viewModels/DragonViewModel';
import React from 'react';

type PayloadsProps = Pick<
	DragonViewModel,
	'launchPayloadMass' | 'returnPayloadMass' | 'dryMassLb'
>;

const Payloads: React.SFC<PayloadsProps> = ({
	launchPayloadMass,
	returnPayloadMass,
	dryMassLb,
}) => {
	return (
		<DataList.SubGroup>
			<DataList.SubHeading>PAYLOADS MASS</DataList.SubHeading>

			<DataList.Item>
				<DataList.ItemName>Launch</DataList.ItemName>
				<DataList.ItemValue>{launchPayloadMass?.lb} lb</DataList.ItemValue>
			</DataList.Item>

			<DataList.Item>
				<DataList.ItemName>Return</DataList.ItemName>
				<DataList.ItemValue>{returnPayloadMass?.lb} lb</DataList.ItemValue>
			</DataList.Item>

			<DataList.Item>
				<DataList.ItemName>Dry mass</DataList.ItemName>
				<DataList.ItemValue>{dryMassLb} lb</DataList.ItemValue>
			</DataList.Item>
		</DataList.SubGroup>
	);
};

export default Payloads;
