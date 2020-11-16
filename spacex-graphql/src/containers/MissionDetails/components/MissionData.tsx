import { Mission, Vehicle } from 'components';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { SectionTitle } from 'styles/SectionTitle';
import MissionInfo from './MissionInfo';

const MissionData: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<>
			<SectionTitle>{data.rocket.rocketName}</SectionTitle>
			<Mission>
				<Vehicle>
					<Vehicle.Image
						src={data.rocket.rocket.id}
						type='rocket'
						hasHeight={false}
					/>
				</Vehicle>
				<MissionInfo {...data} />
			</Mission>
		</>
	);
};

export default MissionData;
