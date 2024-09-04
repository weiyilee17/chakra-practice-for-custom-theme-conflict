import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/rootLayout';
import Create, { createAction } from './pages/create';
import Dashboard, { tasksLoader } from './pages/dashboard';
import Profile from './pages/profile';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: tasksLoader,
      },
      {
        path: 'create',
        element: <Create />,
        action: createAction,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
