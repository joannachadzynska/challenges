import * as React from 'react';
import { Character } from 'providers/characterProviders';
import { StyledTableRow, StyledTableCell } from './common';

export interface TableRowProps {}

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
      <StyledTableCell component="th" scope="row">
        {name}
      </StyledTableCell>
      <StyledTableCell align="right">{eye_color}</StyledTableCell>
      <StyledTableCell align="right">{gender}</StyledTableCell>
      <StyledTableCell align="right">{hair_color}</StyledTableCell>
      <StyledTableCell align="right">{height}</StyledTableCell>
      <StyledTableCell align="right">{mass}</StyledTableCell>
    </StyledTableRow>
  );
};

export default TableRow;
