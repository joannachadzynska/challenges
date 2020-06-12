/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableContainer, Paper } from '@material-ui/core';
import { RootState } from 'redux/reducers/rootReducer';
import { StyledTableRow, StyledTableCell } from './common';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const CustomizedTable: React.FC = () => {
  const classes = useStyles();
  const characters = useSelector((state: RootState) => state.characters);
  const tableData: JSX.Element[] = [];

  characters.forEach((keysCharacters, key) => {
    tableData.push(
      <Fragment key={key}>
        <StyledTableRow>
          <StyledTableCell component="td" scope="row" colSpan={6}>
            {key}
          </StyledTableCell>
        </StyledTableRow>
        {keysCharacters.map((character) => (
          <TableRow key={character.name} {...character} />
        ))}
      </Fragment>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeader />
        <TableBody>{tableData}</TableBody>
      </Table>
    </TableContainer>
  );
};
