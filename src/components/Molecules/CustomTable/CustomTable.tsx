import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

export type TColumnTable = {
  name: string;
  label: string;
  render?: (rows: any) => void;
};

export type TCustomTableProps = {
  columns: TColumnTable[];
  rows: any[];
};

export const CustomTable: React.FC<TCustomTableProps> = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.name}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              {columns.map(column => (
                <TableCell component="th" scope="row">
                  {column?.render ? column.render(row) : row[column.name]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
