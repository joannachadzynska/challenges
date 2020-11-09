import * as React from 'react';

export interface VehicleProps {}

const Vehicle: React.SFC<VehicleProps> = ({ children, ...restProps }) => {
	return <div {...restProps}>{children}</div>;
};

export default Vehicle;
