import {
  WelcomePage,
  AuthenticationPage,
  VerifyPageEmail,
  ProtectedRoute,
} from '@/pages';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/auth',
    element: <AuthenticationPage />,
    children: [{}],
  },
  {
    path: '/verify-email',
    element: <VerifyPageEmail />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <div>Dashboard</div>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
