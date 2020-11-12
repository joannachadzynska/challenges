import { DataList } from 'components';
import { Rocket } from 'models/rockets/interfaces/Rocket';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';

const VehicleData: React.SFC<Rocket> = (props) => {
	const data = new RocketViewModel(props);

	return (
		<DataList>
			<p>{data.description}</p>
			<br />
			<DataList.Group>
				<DataList.SubGroup>
					<DataList.SubHeading>Params</DataList.SubHeading>
					<DataList.Item>
						<DataList.ItemName>height</DataList.ItemName>
						<DataList.ItemValue>{data.height?.feet} ft</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>mass</DataList.ItemName>
						<DataList.ItemValue>{data.mass?.lb} lbs</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>diameter</DataList.ItemName>
						<DataList.ItemValue>{data.diameter?.feet} ft</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>stages</DataList.ItemName>
						<DataList.ItemValue>{data.stages}</DataList.ItemValue>
					</DataList.Item>
				</DataList.SubGroup>
				{/* Engines */}
				<DataList.SubGroup>
					<DataList.SubHeading>Engines</DataList.SubHeading>
					<DataList.Item>
						<DataList.ItemName>number</DataList.ItemName>
						<DataList.ItemValue>{data.engines?.number}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>type</DataList.ItemName>
						<DataList.ItemValue>{data.engines?.type}</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>thrust</DataList.ItemName>
						<DataList.ItemValue>
							{data.engines?.thrust_sea_level.lbf} lbf
						</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>layout</DataList.ItemName>
						<DataList.ItemValue>{data.engines?.layout}</DataList.ItemValue>
					</DataList.Item>
				</DataList.SubGroup>
				{/* Payloads */}
				<DataList.SubGroup>
					<DataList.SubHeading>Payloads</DataList.SubHeading>
					<DataList.Item>
						<DataList.ItemName>Payload to leo</DataList.ItemName>
						<DataList.ItemValue>
							{data.payloadWeights
								?.filter((p) => p.id === 'leo')
								.map(({ lb }) => lb)}{' '}
							lbs
						</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>Payload to GTO</DataList.ItemName>
						<DataList.ItemValue>
							{data.payloadWeights
								?.filter((p) => p.id === 'gto')
								.map(({ lb }) => lb)}{' '}
							lbs
						</DataList.ItemValue>
					</DataList.Item>
					<DataList.Item>
						<DataList.ItemName>Payload to mars</DataList.ItemName>
						<DataList.ItemValue>
							{data.payloadWeights
								?.filter((p) => p.id === 'mars')
								.map(({ lb }) => lb)}{' '}
							lbs
						</DataList.ItemValue>
					</DataList.Item>
				</DataList.SubGroup>
			</DataList.Group>
		</DataList>
	);
};

export default VehicleData;
