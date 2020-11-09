import styled from 'styled-components/macro';

export const Container = styled.section`
	background-color: #001018d9;
	display: grid;
	grid-template-columns: 1fr;
	align-items: flex-start;
	margin: 2.5rem 0px 5rem;
	padding: 1em;

	@media (min-width: 768px) {
		grid-template-columns: 2fr 3fr;
		column-gap: 2rem;
		margin: 2.5rem 0px 8rem;
	}
`;
