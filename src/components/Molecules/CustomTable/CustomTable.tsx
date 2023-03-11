import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { Box, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export type TColumnTable = {
  name: string;
  label: string;
  render?: (rows: any) => void;
  activeSort?: boolean;
  orderBy?: string;
  ordering?: 'asc' | 'desc';
  onSortClick?: (columnName: string) => void;
};

export type TCustomTableProps = {
  columns: TColumnTable[];
  rows: any[];
  page: number;
  setPage: (newPage: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (page: number) => void;
};

export const CustomTable: React.FC<TCustomTableProps> = ({
  columns,
  rows,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map(
                ({ name, ordering, label, activeSort, onSortClick }) => (
                  <TableCell key={name}>
                    <TableSortLabel
                      active={activeSort}
                      direction={activeSort ? ordering : 'asc'}
                      onClick={() => onSortClick && onSortClick(name)}
                    >
                      {label}
                      {activeSort ? (
                        <Box component="span" sx={visuallyHidden}>
                          {ordering === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map(({ name, render }) => (
                    <TableCell key={name} component="th" scope="row">
                      {render ? render(row) : row[name]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
