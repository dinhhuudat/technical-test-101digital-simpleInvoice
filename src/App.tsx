import { Button } from '@mui/material';
import { useState } from 'react';
import InvoiceTable from './components/Organisms/invoiceTable';

function App() {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleClose = () => {
    setOpenCreateModal(false);
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  return (
    <div className="App">
      <Button onClick={handleOpenCreateModal}>Open Modal</Button>
      {/* add create invoice form table */}
      <InvoiceTable />
    </div>
  );
}

export default App;
