import styled from 'styled-components/macro';
import { StyledLinkButton } from 'styles/Button';

export interface VehicleProps {
	height?: string;
	hasHeight?: boolean;
}

export const Container = styled.div`
	display: block;
	text-align: center;
	margin-bottom: 2rem;

	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;

export const Inner = styled.div<VehicleProps>`
	height: ${({ height, hasHeight }) =>
		height && hasHeight ? `${height}px` : '400px'};

	@media (min-width: 768px) {
		height: ${({ height, hasHeight }) =>
			height && hasHeight ? `${height}px` : '800px'};
	}
`;

export const ImageWrapper = styled.div`
	height: 100%;
	max-height: 850px;
`;

export const VehicleImageWrapper = styled.div<VehicleProps>`
	position: relative;
	overflow: hidden;
	height: 100%;
	max-height: 850px;
`;

export const Image = styled.img<VehicleProps>`
	position: absolute;
	top: 0;
	left: 0;
	height: ${({ height }) => (height ? `${height}px` : '100%')};
	object-position: center center;

	max-height: 850px;
	margin: 0px auto;
	width: 100% !important;
	object-fit: contain !important;
`;

export const Name = styled.h3`
	font-weight: 400;
	margin: 0px 0px 2rem 0.5rem;
	text-transform: uppercase;
`;

export const Group = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 4rem 1rem;
	align-items: end;
	padding: 3rem 0 0;

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const ButtonLink = styled(StyledLinkButton)`
	margin-top: 1em;
`;

export const Description = styled.p`
	color: #fff;
	font-size: 1rem;
	line-height: 1.6;
	justify-self: center;
	text-align: justify;
	max-width: clamp(45ch, 50%, 75ch);
`;

export const Lineup = styled.div`
	border-left: 1px dashed rgba(255, 255, 255, 0.25);
	display: flex;
	justify-content: space-between;
	flex-flow: column nowrap;
	text-align: center;
	padding: 0px 0px 0px 0.5rem;
	margin-bottom: 2rem;

	@media (min-width: 992px) {
		margin-bottom: 0;
	}
`;
