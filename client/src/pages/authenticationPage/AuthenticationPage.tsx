import { Link } from 'react-router-dom';
import { AuthLoginForm } from './components/AuthLoginForm';
import { AuthRegisterForm } from './components/AuthRegisterForm';
import { useCallback, useState } from 'react';
import { AuthHeader } from './components/AuthHeader';
import introImg2 from '../../../public/intro1.png';
import { Card } from '@/components/ui/card';

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
        </Card>
      </div>
      <div className='hidden bg-white lg:block'>
        <img
          src={introImg2}
          alt='Image'
          className='h-full w-full object-contain dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  );
};

export default AuthenticationPage;
