import { Dialog, DialogContent, DialogTitle, useTheme } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

type TCustomModalProps = {
  isOpen?: boolean;
  handleClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export const CustomModal: React.FC<TCustomModalProps> = ({
  isOpen = false,
  handleClose,
  title,
  children,
}) => {
  const theme = useTheme();
  const dataTestId = 'CustomModal';
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        data-testid={dataTestId}
        fullScreen={fullScreen}
      >
        <DialogTitle
          data-testid={`${dataTestId}-title`}
          id="responsive-dialog-title"
        >
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};
