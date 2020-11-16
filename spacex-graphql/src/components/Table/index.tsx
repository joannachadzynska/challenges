import React from 'react';
import {
	Container,
	Footer,
	Header,
	Main,
	Row,
	RowHeader,
	RowMain,
} from './styles/table';

export interface TableComposition {
	Header: React.FC;
	Main: React.FC;
	Footer: React.FC;
	Row: React.FC;
	HeaderItem: React.FC;
	MainItem: React.FC;
}

const Table: React.SFC & TableComposition = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export const TableHeader: React.FC = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

export const TableMain: React.FC = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export const TableFooter: React.FC = ({ children, ...restProps }) => {
	return <Footer {...restProps}>{children}</Footer>;
};

export const TableRow: React.FC = ({ children, ...restProps }) => {
	return <Row {...restProps}>{children}</Row>;
};

export const TableHeaderItem: React.FC = ({ children, ...restProps }) => {
	return <RowHeader {...restProps}>{children}</RowHeader>;
};

export const TableMainItem: React.FC = ({ children, ...restProps }) => {
	return <RowMain {...restProps}>{children}</RowMain>;
};

Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.HeaderItem = TableHeaderItem;
Table.Main = TableMain;
Table.MainItem = TableMainItem;
Table.Row = TableRow;

export default Table;
