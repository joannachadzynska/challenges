import * as React from 'react';
import {
	ButtonLink,
	Container,
	Description,
	Group,
	Image,
	ImageWrapper,
	Inner,
	Lineup,
	Name,
	VehicleImageWrapper,
} from './styles/vehicle';

export interface VehicleComposition {
	Description: React.FC;
	Image: React.FC<ImageProps>;
	Name: React.FC;
	Group: React.FC;
	Link: React.FC<LinkProps>;
	Lineup: React.FC;
}

export interface ImageProps {
	src: any;
	type?: string;
	alt?: string;
	hasHeight?: boolean;
}

export interface LinkProps {
	to?: any;
}

const Vehicle: React.SFC & VehicleComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const VehicleImage: React.FC<ImageProps> = ({
	src,
	type,
	alt,
	hasHeight = true,
	...restProps
}) => {
	const setHeight = () => {
		let height = '';
		if (src === 'falcon1') {
			height = '200';
		}
		if (src === 'falcon9' || type === 'capsule') {
			height = '400';
		}
		if (src === 'falconheavy') {
			height = '425';
		}
		if (src === 'starship') {
			height = '850';
		}

		return height;
	};

	return (
		<Inner height={setHeight()} hasHeight={hasHeight}>
			<ImageWrapper>
				<VehicleImageWrapper>
					<Image
						src={`/images/vehicles/${type}/${src}.png`}
						{...restProps}
						alt={alt}
					/>
					<picture>
						<source></source>
					</picture>
				</VehicleImageWrapper>
			</ImageWrapper>
		</Inner>
	);
};

export const VehicleName: React.FC = ({ children, ...restProps }) => {
	return <Name {...restProps}>{children}</Name>;
};

export const VehicleGroup: React.FC = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};

export const VehicleDescription: React.FC = ({ children, ...restProps }) => {
	return <Description {...restProps}>{children}</Description>;
};

export const VehicleLineup: React.FC = ({ children, ...restProps }) => {
	return <Lineup {...restProps}>{children}</Lineup>;
};

export const VehicleLink: React.FC<LinkProps> = ({
	to,
	children,
	...restProps
}) => {
	return (
		<ButtonLink variant='yellow' to={to} {...restProps}>
			{children}
		</ButtonLink>
	);
};

Vehicle.Description = VehicleDescription;
Vehicle.Image = VehicleImage;
Vehicle.Lineup = VehicleLineup;
Vehicle.Name = VehicleName;
Vehicle.Group = VehicleGroup;
Vehicle.Link = VehicleLink;

export default Vehicle;
