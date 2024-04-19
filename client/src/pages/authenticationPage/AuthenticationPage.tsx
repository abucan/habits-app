import { Link, useSearchParams } from 'react-router-dom';
import { AuthLoginForm } from './components/AuthLoginForm';
import { AuthRegisterForm } from './components/AuthRegisterForm';
import { useCallback, useEffect, useState } from 'react';
import { AuthHeader } from './components/AuthHeader';
import introImg2 from '../../../public/intro1.png';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/store/configureStore';
import { router } from '@/router/AppRouter';
import { Logo } from '@/components/logo';
import { ButtonEnums } from '@/ts/enums/app_enums';

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
    <main className='w-full flex relative'>
      <div className='relative flex-1 hidden items-center justify-center h-screen lg:flex bg-gradient-to-tr from-primary_main to-primary_blue'>
        <img
          src={introImg2}
          alt='intro'
          className='absolute inset-0 object-cover w-full h-full'
        />
        <div className='relative z-10 w-full max-w-md'>
          <Logo isDark width={200} />
          <div className=' mt-16 space-y-3'>
            <h3 className='text-white text-3xl font-bold'>
              Start tracking your habits today.
            </h3>
            <p className='text-gray-300'>
              Create an account and get access to all features, no credit card
              required.
            </p>
            <Link
              to='/'
              className='flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 bg-white font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex'
            >
              {ButtonEnums.VISIT_HOME}
            </Link>
          </div>
        </div>
        <div className='absolute inset-0 w-full h-full my-auto bg-gradient-to-tr from-primary_main to-primary_blue opacity-95'></div>
      </div>
      <div className='flex-1 flex items-center justify-center h-screen bg-slate-50'>
        <div className='w-full max-w-md space-y-8 px-4 bg-transparent text-gray-600 sm:px-0 flex flex-col'>
          <div className='self-center lg:hidden'>
            <Link to={'/'}>
              <Logo width={200} />
            </Link>
          </div>
          <Card className='p-6 bg-slate-50 shadow-none'>
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
                <Link to='#' className='ml-1' onClick={handleTabChange}>
                  <span className='font-[500]'>
                    {activeTab === 'login' ? 'Register' : 'Login'}
                  </span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className='custom-shape-divider-top-1713522799 hidden lg:block'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M649.97 0L550.03 0 599.91 54.12 649.97 0z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default AuthenticationPage;
