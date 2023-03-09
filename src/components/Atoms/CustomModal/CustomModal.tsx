import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";

const defaultStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

type TCustomModalProps = {
  isOpen?: boolean;
  handleClose: () => void;
  style?: React.CSSProperties;
  title?: string;
  children?: React.ReactNode;
};

export const CustomModal: React.FC<TCustomModalProps> = ({
  isOpen = false,
  handleClose,
  title,
  style,
  children,
}) => {
  const dataTestId = "CustomModal";
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid={dataTestId}
      >
        <Box sx={defaultStyle} style={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            data-testid={`${dataTestId}-title`}
            sx={{ mb: 2 }}
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
