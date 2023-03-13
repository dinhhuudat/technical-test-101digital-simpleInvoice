import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { useProfile } from '../../services/users/hook';
import CreateInvoiceForm from '../Molecules/CreateInvoiceForm';
import InvoiceTable from '../Organisms/invoiceTable';
import NavBar from '../Organisms/NavBar';

function Root() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { isError } = useProfile();

  const handleClose = () => {
    setOpenCreateModal(false);
  };

  const onCreateInvoice = () => {
    setOpenCreateModal(true);
  };

  return (
    <>
      <NavBar />
      <Stack sx={{ margin: '100px' }}>
        {isError ? (
          <div>You have to login first!</div>
        ) : (
          <>
            <Stack justifyItems={'flex-end'} alignItems="flex-end">
              <Button onClick={onCreateInvoice}>Create Invoice</Button>
            </Stack>
            <InvoiceTable />
            <CreateInvoiceForm isOpen={openCreateModal} onClose={handleClose} />
          </>
        )}
      </Stack>
    </>
  );
}

export default Root;
