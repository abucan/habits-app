import {
  WelcomePage,
  AuthenticationPage,
  VerifyPageEmail,
  ProtectedRoute,
  NotFoundPage,
  DashboardPage,
} from '@/pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
    errorElement: <NotFoundPage />,
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
        element: <DashboardPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
