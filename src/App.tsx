import { Button } from '@mui/material';
import { useState } from 'react';
import CreateInvoiceForm from './components/Molecules/CreateInvoiceForm';
import CustomTable from './components/Molecules/CustomTable';
import { TColumnTable } from './components/Molecules/CustomTable/CustomTable';
import { mockData } from './mockData';

function App() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleClose = () => {
    setOpenCreateModal(false);
  };
  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const columns: TColumnTable[] = [
    {
      name: 'invoiceId',
      label: 'Id',
      render: rows => <Button>{rows.invoiceId}</Button>,
    },
    { name: 'invoiceNumber', label: 'Invoice Number' },
    { name: 'currency', label: 'Currency' },
    { name: 'invoiceDate', label: 'Date' },
  ];

  return (
    <div className="App">
      <Button onClick={handleOpenCreateModal}>Open Modal</Button>
      <CustomTable columns={columns} rows={mockData.data} />
    </div>
  );
}

export default App;
