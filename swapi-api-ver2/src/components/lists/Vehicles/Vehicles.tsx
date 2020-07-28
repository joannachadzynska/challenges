import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CustomList, CustomLink } from '../../shared';

const Vehicles: React.SFC = () => {
	const vehicles = useSelector((state: RootState) => state.vehicles);
	return (
		<CustomList name='Vehicles'>
			{vehicles.map((vehicle) => (
				<li key={vehicle.name}>
					<CustomLink endpoint='vehicles' id={vehicle.name} />
				</li>
			))}
		</CustomList>
	);
};

export default Vehicles;
