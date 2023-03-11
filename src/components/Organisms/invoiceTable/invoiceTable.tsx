import { Button } from '@mui/material';
import React, { useState } from 'react';
import { mockData } from '../../../mockData';
import { TInvoicesRes } from '../../../types/response';
import CustomTable from '../../Molecules/CustomTable';
import { TColumnTable } from '../../Molecules/CustomTable/CustomTable';

export const InvoiceTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columns: TColumnTable[] = [
    {
      name: 'invoiceId',
      label: 'Id',
      render: (row: TInvoicesRes) => <Button>{row.invoiceId}</Button>,
      activeSort: true,
      onSortClick: (data: string) => console.log(123, data),
    },
    { name: 'invoiceNumber', label: 'Invoice Number' },
    { name: 'currency', label: 'Currency' },
    { name: 'invoiceDate', label: 'Date' },
  ];

  return (
    <>
      <CustomTable
        columns={columns}
        rows={mockData.data}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      {/* TODO: add modal detail invoice */}
    </>
  );
};
