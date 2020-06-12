import React from 'react';
import { TableRow, TableHead } from '@material-ui/core';
import { StyledTableCell } from './common';

const TableHeader: React.SFC = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="right">Eyes Color</StyledTableCell>
        <StyledTableCell align="right">Gender</StyledTableCell>
        <StyledTableCell align="right">Hair Color</StyledTableCell>
        <StyledTableCell align="right">Height</StyledTableCell>
        <StyledTableCell align="right">Mass</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
