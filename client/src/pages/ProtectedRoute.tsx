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
    <div>
      <MainNavbar />
      <Sidebar />
    </div>
  );
};

export default ProtectedRoute;
