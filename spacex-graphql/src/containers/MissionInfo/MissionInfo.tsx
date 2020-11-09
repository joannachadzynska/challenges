import { DataList } from 'components';
import React from 'react';
import { LaunchViewModel } from './../../models/launches/viewModels/LaunchViewModel';

type MissionInfoProps = Pick<LaunchViewModel, 'rocket'>;

const MissionInfo: React.SFC<MissionInfoProps> = ({ rocket }) => {
	const { firstStage, secondStage } = rocket;

	return (
		<DataList>
			<DataList.Group>
				<DataList.Heading>Mission Cores</DataList.Heading>

				{firstStage.cores.map((core) => (
					<DataList.SubGroup key={core.core.id}>
						<DataList.SubHeading>C // 1</DataList.SubHeading>

						<DataList.Item>
							<DataList.ItemName>flights</DataList.ItemName>
							<DataList.ItemValue>{core.flight}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>reused</DataList.ItemName>
							<DataList.ItemValue>
								{core.reused ? 'Yes' : 'No'}
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>successful landing</DataList.ItemName>
							<DataList.ItemValue>
								{core.land_success ? 'Yes' : 'No'}
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>landing intended</DataList.ItemName>
							<DataList.ItemValue>
								{core.landing_intent ? 'Yes' : 'No'}
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>landing vehicle</DataList.ItemName>
							<DataList.ItemValue>{core.landing_vehicle}</DataList.ItemValue>
						</DataList.Item>
					</DataList.SubGroup>
				))}
				<br />
				<DataList.Heading>Mission Payloads</DataList.Heading>
				{secondStage.payloads.map((payload) => (
					<DataList.SubGroup key={payload.payload_mass_lbs}>
						<DataList.SubHeading>P // 1</DataList.SubHeading>
						<DataList.Item>
							<DataList.ItemName>customer</DataList.ItemName>
							<DataList.ItemValue>{payload.customers}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>type</DataList.ItemName>
							<DataList.ItemValue>{payload.payload_type}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>manufacture</DataList.ItemName>
							<DataList.ItemValue>{payload.manufacturer}</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>weight</DataList.ItemName>
							<DataList.ItemValue>
								{payload.payload_mass_lbs}lbs
							</DataList.ItemValue>
						</DataList.Item>
						<DataList.Item>
							<DataList.ItemName>orbit</DataList.ItemName>
							<DataList.ItemValue>{payload.orbit}</DataList.ItemValue>
						</DataList.Item>
					</DataList.SubGroup>
				))}
			</DataList.Group>
		</DataList>
	);
};

export default MissionInfo;
