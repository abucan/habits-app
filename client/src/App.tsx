import { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { useAppDispatch } from './store/configureStore';
import { fetchUser } from './features/userSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('App');

    dispatch(fetchUser());
  }, []);

  return <AppRouter />;
};

export default App;
