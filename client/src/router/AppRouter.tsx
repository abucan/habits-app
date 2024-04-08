import AuthenticationPage from '@/pages/authenticationPage/AuthenticationPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// route to
const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthenticationPage />,
    children: [
      {
        path: 'login',
        element: <div className='h-screen w-full bg-red-500'>Login</div>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
