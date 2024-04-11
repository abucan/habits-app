import AuthenticationPage from '@/pages/authenticationPage/AuthenticationPage';
import VerifyPageEmail from '@/pages/verifyEmailPage/VerifyEmailPage';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

// route to
const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthenticationPage />,
    children: [{}],
  },
  {
    path: '/verify-email',
    element: <VerifyPageEmail />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
