import { Button } from "@mui/material";
import { useState } from "react";
import CreateInvoiceForm from "./components/Molecules/CreateInvoiceForm";

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
      <CreateInvoiceForm isOpen={openCreateModal} onClose={handleClose} />
    </div>
  );
}

export default App;
