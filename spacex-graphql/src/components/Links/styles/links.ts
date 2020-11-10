import styled from 'styled-components/macro';

export const Container = styled.ul`
	margin: 3em 0 0;
	padding-bottom: 0;
	padding-left: 0;
	padding-right: 0;
	padding-top: 0;

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
	}
`;

export const Item = styled.li`
	margin: 0;
	padding-left: 0;

	& *:last-child {
		margin-bottom: 0;
	}

	@media (min-width: 768px) {
		border-style: none solid none none;
		border-top: none;
		border-right: 1px solid rgb(34, 34, 34);
		border-image: initial;
		display: block;
		flex: 1 0 auto;
		margin: 0;
		text-align: center;
	}
`;

export const IconLink = styled.a`
	background-color: transparent;
	border-top: 1px solid rgb(34, 34, 34);
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.25rem;
	flex-flow: row wrap;
	padding: 1rem 0px;
	transition: all 0.3s ease 0s;

	svg {
		font-size: 2.5rem;
		fill: ${({ theme }) => theme.colors.yellow.light};
		transition: all 0.3s ease 0s;
		flex: 1 1 25%;
	}

	@media (min-width: 768px) {
		display: block;
		border-width: initial;
		border-style: none;
		border-color: initial;
		border-image: initial;

		svg {
			display: block;
			margin: 0px auto 10px;
		}
	}

	&:hover {
		color: rgb(246, 199, 68);
	}
`;

export const Name = styled.span`
	flex: 1 1 75%;
`;
