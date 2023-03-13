import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Simple Invoice
        </Typography>
        {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map(item => (
            <Link key={item.name} href={item.path}>
              <Button sx={{ color: '#fff' }}>{item.name}</Button>
            </Link>
          ))}
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}
