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
			<Table.MainItem>{id}</Table.MainItem>
			<Table.MainItem>{type}</Table.MainItem>
			<Table.MainItem>{status}</Table.MainItem>
			<Table.MainItem>{landings}</Table.MainItem>
			<Table.MainItem>link</Table.MainItem>
		</Table.Row>
	);
};

export default Capsule;
