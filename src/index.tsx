import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Pages/Errors';
import Root from './components/Pages/Root';
import { SWRConfig } from 'swr';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Root />
      </LocalizationProvider>
    ),
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <SWRConfig
    value={{
      fallback: { a: 1, b: 1 },
      revalidateIfStale: false,
    }}
  >
    <RouterProvider router={router}></RouterProvider>
  </SWRConfig>,
);
