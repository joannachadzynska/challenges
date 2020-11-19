import { Table } from 'components';
import React from 'react';
import { CapsuleViewModel } from './../../../models/capsules/viewModels/CapsuleViewModel';

type CapsuleProps = Pick<
	CapsuleViewModel,
	'id' | 'landings' | 'type' | 'status'
>;

const Capsule: React.SFC<CapsuleProps> = ({ id, type, status, landings }) => {
	return (
		<Table.Row>
			<Table.MainItem dataLabel='Id'>{id}</Table.MainItem>
			<Table.MainItem dataLabel='Type'>{type}</Table.MainItem>
			<Table.MainItem dataLabel='Status'>{status}</Table.MainItem>
			<Table.MainItem dataLabel='Landings'>{landings}</Table.MainItem>
			<Table.MainItem dataLabel='Details'>
				<Table.Link to={`/vehicle/capsule/${id}`}>See more</Table.Link>
			</Table.MainItem>
		</Table.Row>
	);
};

export default Capsule;
