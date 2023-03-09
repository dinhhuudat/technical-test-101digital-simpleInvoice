import { Button } from "@mui/material";
import { useState } from "react";

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
    </div>
  );
}

export default App;
