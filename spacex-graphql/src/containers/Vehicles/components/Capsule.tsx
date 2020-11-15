import { Vehicle } from 'components';
import React from 'react';
import { CapsuleViewModel } from './../../../models/capsules/viewModels/CapsuleViewModel';

type CapsuleProps = Pick<CapsuleViewModel, 'id' | 'dragon' | 'type' | 'status'>;

const Capsule: React.SFC<CapsuleProps> = ({ id, dragon, type, status }) => {
	return (
		<Vehicle.Lineup>
			<Vehicle.Name>{`${dragon?.name} ${id}`}</Vehicle.Name>

			<Vehicle.Description>Status: {status}</Vehicle.Description>
			<Vehicle.Description>Type: {type}</Vehicle.Description>
			<Vehicle.Description></Vehicle.Description>

			<Vehicle.Link to={`/vehicle/capsule/${id}`}>capsule details</Vehicle.Link>
		</Vehicle.Lineup>
	);
};

export default Capsule;
