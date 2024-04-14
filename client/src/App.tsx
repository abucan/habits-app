import AppRouter from './router/AppRouter';
import { fetchUser } from './features/userSlice';
import { useAppDispatch } from './store/configureStore';
import { useEffect, useState } from 'react';

const App = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUser()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  // TODO: Add a loading spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AppRouter />;
};

export default App;
