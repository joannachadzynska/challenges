import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.table`
	border: none;
	border-collapse: collapse;
	width: 100%;
	margin: 1em 0;
	overflow: hidden;
	table-layout: fixed;
`;

export const Header = styled.thead`
	background-color: rgb(0, 34, 53);
`;

export const Main = styled.tbody``;

export const Footer = styled.tfoot``;

export const RowHeader = styled.th`
	color: rgb(246, 199, 68);
	font-weight: 400;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const RowMain = styled.td`
	color: #fff;
	display: flex;
	justify-content: space-between;
	padding: 0.5em 0;

	&:first-child {
		padding-top: 0.5em;
	}
	&:last-child {
		padding-bottom: 0.5em;
	}

	&:before {
		color: ${({ theme }) => theme.colors.yellow.light};
		content: attr(data-label) ': ';
		display: inline-block;
		text-transform: uppercase;

		@media (min-width: 768px) {
			display: none;
		}
	}
`;

export const Row = styled.tr`
	border-top: 5px solid rgb(0, 34, 53);
	transition: background-color 0.3s ease-in-out;

	&:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.03);

		&:hover {
			background-color: #101e26;
		}
	}

	&:hover {
		background-color: rgb(0, 34, 53);
	}

	${RowMain}, ${RowHeader} {
		text-align: center;

		@media (min-width: 768px) {
			display: table-cell;
			padding: 0.5em;
		}
	}
`;

export const ItemLink = styled(Link)`
	color: #fff;
`;
