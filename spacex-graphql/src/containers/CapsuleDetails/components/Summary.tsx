import { Vehicle } from 'components';
import { Capsule } from 'models/capsules/interfaces/Capsule';
import { CapsuleViewModel } from 'models/capsules/viewModels/CapsuleViewModel';
import React from 'react';
import { SectionTitle } from 'styles/SectionTitle';
import { setDateToString } from 'utils/date';

const Summary: React.SFC<Capsule> = (props) => {
	const data = new CapsuleViewModel(props);

	return (
		<>
			<SectionTitle>Summary</SectionTitle>
			<Vehicle>
				<Vehicle.Description>Status: {data.status}</Vehicle.Description>
				<Vehicle.Description>
					Reuse count: {data.reuseCount}
				</Vehicle.Description>
				<Vehicle.Description>Landings: {data.landings}</Vehicle.Description>

				<Vehicle.Description>
					Original launch: {setDateToString(data.originalLaunch)}
				</Vehicle.Description>
			</Vehicle>
		</>
	);
};

export default Summary;
