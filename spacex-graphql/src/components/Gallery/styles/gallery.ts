import styled from 'styled-components/macro';

type ImageProp = {
	showFullImage?: boolean;
};

export const Container = styled.ul`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	margin: 0;
	padding: 0;
	width: 100%;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

export const Image = styled.li<ImageProp>`
	border-radius: 5px;
	cursor: pointer;

	figure {
		margin: 0;
		padding: 0;
		position: relative;
		padding-top: 66%;
		overflow: hidden;

		img {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			height: auto;
			max-width: 100%;
			object-fit: cover;
			transform: scale(1);
			transition: 0.3s ease-in-out;
		}

		&:hover img {
			transform: scale(1.3);
		}
	}
`;

export const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	margin: 0 20px;
`;

export const Inner = styled.div`
	position: relative;
	width: 100%;
	max-width: 900px;
	margin: auto;

	img {
		width: 100%;
		height: auto;
	}
`;
