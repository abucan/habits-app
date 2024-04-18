import { Link, useSearchParams } from 'react-router-dom';
import { AuthLoginForm } from './components/AuthLoginForm';
import { AuthRegisterForm } from './components/AuthRegisterForm';
import { useCallback, useEffect, useState } from 'react';
import { AuthHeader } from './components/AuthHeader';
// import introImg2 from '../../../public/intro1.png';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/store/configureStore';
import { router } from '@/router/AppRouter';

const AuthenticationPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(
    searchParams.get('register') === 'true' ? 'register' : 'login'
  );

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user || user != null) {
      router.navigate('/dashboard');
    }
  }, [user]);

  const handleTabChange = useCallback(() => {
    setActiveTab(activeTab === 'login' ? 'register' : 'login');
  }, [activeTab]);

  return (
    <main className='w-full flex'>
      <div className='relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex'>
        <div className='relative z-10 w-full max-w-md'>
          <img src='https://floatui.com/logo-dark.svg' width={150} />
          <div className=' mt-16 space-y-3'>
            <h3 className='text-white text-3xl font-bold'>
              Start tracking your habits today.
            </h3>
            <p className='text-gray-300'>
              Create an account and get access to all features, no credit card
              required.
            </p>
          </div>
        </div>
        <div
          className='absolute inset-0 my-auto h-[500px]'
          style={{
            background:
              'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
            filter: 'blur(118px)',
          }}
        ></div>
      </div>
      <div className='flex-1 flex items-center justify-center h-screen'>
        <div className='w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0'>
          <Card className='p-6'>
            <div className='mx-auto grid w-[350px] gap-6'>
              {activeTab === 'login' && (
                <AuthHeader
                  title='Login'
                  description='Please use your credentials to login.'
                />
              )}
              {activeTab === 'register' && (
                <AuthHeader
                  title='Register'
                  description='Please fill in the form to create an account.'
                />
              )}
              {activeTab === 'login' ? <AuthLoginForm /> : <AuthRegisterForm />}
              <div className='mt-4 text-center text-sm'>
                {activeTab === 'login'
                  ? 'Don’t have an account?'
                  : 'Already have an account?'}
                <Link
                  to='#'
                  className='underline ml-1'
                  onClick={handleTabChange}
                >
                  {activeTab === 'login' ? 'Register' : 'Login'}
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default AuthenticationPage;
