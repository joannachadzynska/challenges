import { Mission } from 'components';
import { MissionInfo, VehicleContainer } from 'containers';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { SectionTitle } from 'styles/SectionTitle';

const MissionData: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<>
			<SectionTitle>{data.rocket.rocketName}</SectionTitle>
			<Mission>
				<VehicleContainer {...data} />
				<MissionInfo {...data} />
			</Mission>
		</>
	);
};

export default MissionData;
