import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { TInvoiceRes } from '../../../types/response';
import CustomModal from '../../Atoms/CustomModal';

export type TInvoiceDetailsProps = {
  isOpen: boolean;
  handleClose: () => void;
  data: TInvoiceRes | undefined;
};

export const InvoiceDetails: React.FC<TInvoiceDetailsProps> = ({
  isOpen,
  handleClose,
  data,
}) => {
  if (!data) return <></>;

  return (
    <CustomModal
      handleClose={handleClose}
      title={`ID: ${data.invoiceId}`}
      isOpen={isOpen}
    >
      <Stack sx={{ overflow: 'auto', maxHeight: '400px' }}>
        {(Object.keys(data) as Array<keyof typeof data>).map(k => (
          <Typography
            key={k}
            variant="caption"
          >{`${k}: ${data[k]}`}</Typography>
        ))}
      </Stack>
      <Stack alignItems={'flex-end'}>
        <Button color="secondary" variant="outlined" onClick={handleClose}>
          close
        </Button>
      </Stack>
    </CustomModal>
  );
};
