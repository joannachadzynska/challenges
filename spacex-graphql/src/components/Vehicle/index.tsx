import * as React from 'react';
import {
	Container,
	Image,
	ImageWrapper,
	Inner,
	VehicleImageWrapper,
} from './styles/vehicle';

export interface VehicleComposition {
	Image: React.FC<ImageProps>;
}

export interface ImageProps {
	src: any;
	alt?: string;
}

const Vehicle: React.SFC & VehicleComposition = ({
	children,
	...restProps
}) => {
	return (
		<Container {...restProps}>
			<Inner>
				<ImageWrapper>{children}</ImageWrapper>
			</Inner>
		</Container>
	);
};

export const VehicleImage: React.FC<ImageProps> = ({
	src,
	alt,
	...restProps
}) => {
	return (
		<VehicleImageWrapper>
			<Image src={`/images/vehicles/${src}.png`} {...restProps} alt={alt} />
			<picture>
				<source></source>
			</picture>
		</VehicleImageWrapper>
	);
};

Vehicle.Image = VehicleImage;

export default Vehicle;
