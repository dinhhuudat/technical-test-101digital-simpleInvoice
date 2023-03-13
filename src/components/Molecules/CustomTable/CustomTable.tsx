import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useMemo } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { Box, Skeleton, TableSortLabel, Typography } from '@mui/material';
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
  totalRows: number;
  isLoading: boolean;
};

export const CustomTable: React.FC<TCustomTableProps> = ({
  columns,
  rows,
  page,
  setPage,
  rowsPerPage,
  totalRows,
  isLoading = false,
}) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

  const SkeletonLoading = useMemo(() => {
    const result = new Array(5).fill(undefined).map((_, index) => (
      <TableRow key={index}>
        {columns.map(({ name }) => (
          <TableCell key={name} component="th" scope="row">
            <Skeleton
              variant="text"
              sx={{ fontSize: '1rem' }}
              width={210}
              height={60}
            />
          </TableCell>
        ))}
      </TableRow>
    ));
    return result;
  }, [columns]);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: '100%', maxHeight: '500px', overflow: 'auto' }}
      >
        <Table aria-label="simple table" stickyHeader>
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
                      <Typography variant="h6">{label}</Typography>
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
            {isLoading
              ? SkeletonLoading
              : rows
                  // ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row, index) => (
                    <TableRow key={index} sx={{ maxHeight: '50px' }}>
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
      {rows && (
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          onPageChange={handleChangePage}
        />
      )}
    </>
  );
};
