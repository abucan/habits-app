import { Link } from 'react-router-dom';
import { AuthLoginForm } from './components/AuthLoginForm';
import { AuthRegisterForm } from './components/AuthRegisterForm';
import { useCallback, useEffect, useState } from 'react';
import { AuthHeader } from './components/AuthHeader';
import introImg2 from '../../../public/intro1.png';
import { Card } from '@/components/ui/card';
import { useAppSelector } from '@/store/configureStore';
import { router } from '@/router/AppRouter';

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(
    'login',
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

  // const words = [
  //   {
  //     text: 'Start',
  //   },
  //   {
  //     text: 'tracking',
  //   },
  //   {
  //     text: 'your',
  //   },
  //   {
  //     text: 'habits',
  //   },
  //   {
  //     text: 'today.',
  //     className: 'text-blue-500 dark:text-blue-500',
  //   },
  // ];

  return (
    <div className='w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen '>
      <div className='flex items-center justify-center py-12 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <div>
          {/* <TypewriterEffectSmooth words={words} /> */}
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
      </div>
      <div className='hidden lg:block relative'>
        <div className='absolute inset-0 flex items-center justify-center'>
          {/* <TypewriterEffectSmooth words={words} /> */}
        </div>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]'></div>
        <img
          src={introImg2}
          alt='Image'
          className='h-full w-full object-contain dark:brightness-[0.7] dark:grayscale'
        />
      </div>
    </div>
  );
};

export default AuthenticationPage;
