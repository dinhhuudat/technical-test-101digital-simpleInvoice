import { Button, Tooltip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useInvoices } from '../../../services/invoice/hook';
import { useProfile } from '../../../services/users/hook';
import { TInvoiceSort } from '../../../types/request';
import { TInvoiceRes } from '../../../types/response';
import CustomTable from '../../Molecules/CustomTable';
import { TColumnTable } from '../../Molecules/CustomTable/CustomTable';
import InvoiceDetails from '../../Molecules/InvoiceDetails';
import SearchInvoice from '../../Molecules/SearchInvoice';

export const InvoiceTable: React.FC = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [invoiceData, setInvoiceData] =
    useState<TInvoiceRes | undefined>(undefined);

  const [page, setNewPage] = useState(0);
  const [sortBy, setSortBy] = useState<TInvoiceSort>('CREATED_DATE');
  const [keyword, setKeyword] = useState<string>('');

  const { orgId } = useProfile();
  const {
    data: invoices,
    pageNumber,
    totalRecords,
    isLoading,
  } = useInvoices({
    orgId,
    query: { pageNum: page, sortBy, ordering: 'DESCENDING', keyword },
  });

  const setPage = (newPage: number) => {
    setNewPage(newPage);
  };

  const handleDetailClick = (invoiceId: string) => {
    const newData = ((invoices as TInvoiceRes[]) || [])?.find(
      e => e.invoiceId === invoiceId,
    );
    if (newData) {
      setOpenDetail(true);
      setInvoiceData(newData);
    }
  };

  const columns: TColumnTable[] = [
    {
      name: 'invoiceId',
      label: 'Id',
      render: ({ invoiceId }: TInvoiceRes) => (
        <Button onClick={() => handleDetailClick(invoiceId)}>Detail</Button>
      ),
    },
    {
      name: 'invoiceNumber',
      label: 'Invoice number',
      activeSort: sortBy === 'INVOICE_NUMBER',
      onSortClick: () => setSortBy('INVOICE_NUMBER'),
    },
    {
      name: 'currency',
      label: 'Currency',
      activeSort: sortBy === 'CURRENTCY',
      onSortClick: () => setSortBy('CURRENTCY'),
    },
    {
      name: 'invoiceDate',
      label: 'Invoice date',
      activeSort: sortBy === 'INVOICE_DATE',
      onSortClick: () => setSortBy('INVOICE_DATE'),
    },
    {
      name: 'createdAt',
      label: 'Create date',
      render: ({ createdAt }: TInvoiceRes) => (
        <Typography>{dayjs(createdAt).format('YYYY-MM-DD')}</Typography>
      ),
      activeSort: sortBy === 'CREATED_DATE',
      onSortClick: () => setSortBy('CREATED_DATE'),
    },
    {
      name: 'description',
      label: 'Description',
      render: ({ description }: TInvoiceRes) => (
        <Tooltip title={description}>
          <Typography noWrap sx={{ maxWidth: '200px' }}>
            {description}
          </Typography>
        </Tooltip>
      ),
      activeSort: sortBy === 'DESCRIPTION',
      onSortClick: () => setSortBy('DESCRIPTION'),
    },
  ];

  const onSearch = ({ keyword }: { keyword: string }) => {
    setKeyword(keyword);
  };

  const onCloseDetail = () => {
    setOpenDetail(false);
    setInvoiceData(undefined);
  };

  return (
    <>
      <SearchInvoice onSearch={onSearch} />
      <CustomTable
        columns={columns}
        rows={invoices}
        page={pageNumber}
        rowsPerPage={10}
        setPage={setPage}
        totalRows={totalRecords}
        isLoading={isLoading}
      />
      <InvoiceDetails
        isOpen={openDetail}
        data={invoiceData}
        handleClose={onCloseDetail}
      />
    </>
  );
};
