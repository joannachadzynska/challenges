import styled from 'styled-components';

export const Button = styled.button`
	background: transparent;
	border: 2px solid #0094ff;
	border-radius: 5px;
	color: #0094ff;
	font-size: 1.25rem;
	padding: 0.875em 1.5em;
	text-transform: uppercase;
	transition: 0.3s all linear;

	&:hover {
		background: #0094ff;
		color: #000;
	}
`;
