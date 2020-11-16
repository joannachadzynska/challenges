import styled from 'styled-components/macro';

export const Container = styled.table`
	font-weight: 400;
	text-align: center;
	border-collapse: collapse;
	width: 100%;
`;

export const Header = styled.thead`
	background-color: rgb(0, 34, 53);
	padding: 1rem;
	margin: 0px;
	border-top: 5px solid rgb(0, 34, 53);

	@media (min-width: 768px) {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
`;

export const Main = styled.tbody`
	background-color: rgba(255, 255, 255, 0.03);
`;

export const Footer = styled.tfoot``;

export const RowHeader = styled.th`
	color: rgb(246, 199, 68);
	font-weight: 400;
`;

export const RowMain = styled.td`
	color: #fff;
`;

export const Row = styled.tr`
	${RowHeader}, ${RowMain} {
		padding: 5px 10px;
	}

	&:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.03);
	}
`;
