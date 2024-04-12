import { useAppSelector } from '@/store/configureStore';
import { useEffect } from 'react';
import { Navigate, Outlet, redirect } from 'react-router-dom';

const ProtectedRoute = () => {
  useEffect(() => {
    console.log('ProtectedRoute');
  }, []);
  const { user } = useAppSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to='/auth'></Navigate>;
};
export default ProtectedRoute;
