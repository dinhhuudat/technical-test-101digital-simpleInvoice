import { Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useProfile } from '../../../services/users/hook';
import SignInForm from '../../Molecules/SignInForm';

export default function NavBar() {
  const { data: profile, isError } = useProfile();

  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleLogin = async () => {
    setOpenModalLogin(true);
  };

  const onClose = async () => {
    setOpenModalLogin(false);
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Simple Invoice
          </Typography>

          <Box>
            {isError ? (
              <Button color="inherit" onClick={handleLogin}>
                Login
              </Button>
            ) : (
              <Box>
                <Typography>{`${profile?.firstName} ${profile?.lastName}`}</Typography>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <SignInForm isOpen={openModalLogin} onClose={onClose} />
    </>
  );
}
