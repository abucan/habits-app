import AuthenticationPage from '@/pages/authenticationPage/AuthenticationPage';
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
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
