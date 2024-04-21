import { Sidebar, MainNavbar } from '@/components';
import { useAppSelector } from '@/store/configureStore';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to='/auth' state={{ from: location }} />;
  }

  return (
    <div className='h-full'>
      <div className='h-[75px] md:pl-72 fixed inset-y-0 w-full z-50'>
        <MainNavbar />
      </div>
      <div className='hidden md:flex w-60 flex-col fixed inset-y-0 z-50'>
        <Sidebar />
      </div>
      <main className='md:pl-72 pt-[75px] h-full w-full'>
        <div className='py-6 px-4 w-full'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ProtectedRoute;
