import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TableCell, TableRow, TableHead } from '@material-ui/core';

export interface TableHeaderProps {}
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const TableHeader: React.SFC<TableHeaderProps> = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
        <StyledTableCell align="right">Calories</StyledTableCell>
        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
