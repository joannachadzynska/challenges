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
	cursor: pointer;
	${({ showFullImage }) =>
		showFullImage
			? `
	img {
		position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
	} 
    `
			: `
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
	}
    
    `}
`;
