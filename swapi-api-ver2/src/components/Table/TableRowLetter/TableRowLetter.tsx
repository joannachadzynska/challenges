import * as React from "react";
import { StyledTableRow } from "../CommonTableElements/StyledTableRow/StyledTableRow";
import { StyledTableCell } from "../CommonTableElements/StyledTableCell/StyledTableCell";

export interface TableRowLetterProps {
	letter: string;
}

const TableRowLetter: React.SFC<TableRowLetterProps> = ({ letter }) => {
	return (
		<StyledTableRow>
			<StyledTableCell colSpan={6} component='td' scope='row'>
				{letter}
			</StyledTableCell>
		</StyledTableRow>
	);
};

export default TableRowLetter;
