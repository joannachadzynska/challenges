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
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
