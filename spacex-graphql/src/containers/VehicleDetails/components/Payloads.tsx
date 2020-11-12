import { DataList } from 'components';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';

type PayloadsProps = Pick<RocketViewModel, 'payloadWeights'>;

const Payloads: React.SFC<PayloadsProps> = ({ payloadWeights }) => {
	return (
		<DataList.SubGroup>
			<DataList.SubHeading>Payloads</DataList.SubHeading>
			<DataList.Item>
				<DataList.ItemName>Payload to leo</DataList.ItemName>
				<DataList.ItemValue>
					{payloadWeights?.filter((p) => p.id === 'leo').map(({ lb }) => lb)}{' '}
					lbs
				</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>Payload to GTO</DataList.ItemName>
				<DataList.ItemValue>
					{payloadWeights?.filter((p) => p.id === 'gto').map(({ lb }) => lb)}{' '}
					lbs
				</DataList.ItemValue>
			</DataList.Item>
			<DataList.Item>
				<DataList.ItemName>Payload to mars</DataList.ItemName>
				<DataList.ItemValue>
					{payloadWeights?.filter((p) => p.id === 'mars').map(({ lb }) => lb)}{' '}
					lbs
				</DataList.ItemValue>
			</DataList.Item>
		</DataList.SubGroup>
	);
};

export default Payloads;
