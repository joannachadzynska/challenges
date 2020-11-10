import styled from 'styled-components/macro';

export const Container = styled.div`
	display: block;
	text-align: center;
	margin-bottom: 2rem;

	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;

export const Inner = styled.div`
	height: 400px;
	@media (min-width: 768px) {
		height: 800px;
	}
`;

export const ImageWrapper = styled.div`
	height: 100%;
	max-height: 850px;
`;

export const VehicleImageWrapper = styled.div`
	position: relative;
	overflow: hidden;
	height: 100%;
	max-height: 850px;
`;

export const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	object-position: center center;

	max-height: 850px;
	margin: 0px auto;
	width: 100% !important;
	object-fit: contain !important;
`;

export const Picture = styled.picture``;
