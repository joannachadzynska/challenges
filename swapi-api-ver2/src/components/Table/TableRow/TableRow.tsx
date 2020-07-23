import React from "react";
import { Character } from "../../../types/characterTypes";
import { StyledTableRow } from "../CommonTableElements/StyledTableRow/StyledTableRow";
import { StyledTableCell } from "../CommonTableElements/StyledTableCell/StyledTableCell";

const TableRow: React.SFC<Character> = ({
	name,
	eye_color,
	gender,
	hair_color,
	height,
	mass,
}) => {
	return (
		<StyledTableRow>
			<StyledTableCell component='th' scope='row'>
				{name}
			</StyledTableCell>
			<StyledTableCell align='right'>{eye_color}</StyledTableCell>
			<StyledTableCell align='right'>{gender}</StyledTableCell>
			<StyledTableCell align='right'>{hair_color}</StyledTableCell>
			<StyledTableCell align='right'>{height}</StyledTableCell>
			<StyledTableCell align='right'>{mass}</StyledTableCell>
		</StyledTableRow>
	);
};

export default TableRow;
