import { Link } from 'react-router-dom';
import { AuthLoginForm } from './components/AuthLoginForm';
import { AuthRegisterForm } from './components/AuthRegisterForm';
import { useCallback, useState } from 'react';
import { AuthHeader } from './components/AuthHeader';

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(
    'login',
  );

  const handleTabChange = useCallback(() => {
    setActiveTab(activeTab === 'login' ? 'register' : 'login');
  }, [activeTab]);

  return (
    <div className='w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen'>
      <div className='flex items-center justify-center py-12'>
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
          {activeTab === 'login' ? (
            <AuthLoginForm />
          ) : (
            <AuthRegisterForm />
          )}
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
      </div>
      <div className='hidden bg-muted lg:block'>
        <img
          src='/placeholder.svg'
          alt='Image'
          width='1920'
          height='1080'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  );
};

export default AuthenticationPage;
