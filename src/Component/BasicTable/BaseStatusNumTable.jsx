import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import LinearIndeterminate from '../Progress/LinearIndeterminate';
import CamelCase from '../Aux/CamelCase';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function BaseStatusNumTable({baseStatNum, baseStatName}) {
    
  console.log(baseStatNum)
  console.log(baseStatName)

  const rows = baseStatNum;
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 100 }} stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: 100 }}>Base Stats</StyledTableCell>
            <StyledTableCell>Value</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={row + Math.random()}>
              <StyledTableCell align="left" sx={{ minWidth: 100, width: '30%' }}>
                {CamelCase(baseStatName[i])}
                </StyledTableCell>
              <StyledTableCell align="left">
                {row}
                </StyledTableCell>
              <StyledTableCell align="left" sx={{ minWidth: 100, width: '100%' }}>
                <LinearIndeterminate value={row}/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}