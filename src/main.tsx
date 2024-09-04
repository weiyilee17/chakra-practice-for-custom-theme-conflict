import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { RouterProvider } from 'react-router-dom';

import { appRouter } from './routes.tsx';
import theme from './chakra/theme.tsx';

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };

// const fonts = {
//   body: 'Tahoma',
//   heading: 'Courier New ',
// };

// const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={appRouter} />
    </ChakraProvider>
  </React.StrictMode>
);
