import { DataList } from 'components';
import { Capsule } from 'models/capsules/interfaces/Capsule';
import { CapsuleViewModel } from 'models/capsules/viewModels/CapsuleViewModel';
import React from 'react';

const MissionsList: React.SFC<Capsule> = (props) => {
	const data = new CapsuleViewModel(props);
	console.log(data.missions);

	return (
		<>
			<DataList>
				<DataList.Heading>Missions</DataList.Heading>
				<DataList.SubGroup>
					{data.missions?.map((mission) => (
						<DataList.Item key={mission.flight}>
							<DataList.ItemName>Name</DataList.ItemName>
							<DataList.ItemValue>{mission.name}</DataList.ItemValue>
						</DataList.Item>
					))}
				</DataList.SubGroup>
			</DataList>
		</>
	);
};

export default MissionsList;
