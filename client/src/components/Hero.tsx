import { APP_NAME, HERO_DESC, HERO_TITLE, NEWSLETTER } from '@/utils/constants';
import { PrimaryButton } from './buttons/primary-button';
import { ButtonEnums } from '@/ts/enums/app_enums';
import { useState } from 'react';
import { toast } from './ui/use-toast';

export const Hero = () => {
  const [email, setEmail] = useState('');

  const mimicSubscription = (e: any) => {
    e.preventDefault();
    if (!email)
      return toast({
        title: 'Something went wrong.',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
        duration: 2000,
      });
    toast({
      title: 'Subscribed!',
      description: 'You have successfully subscribed to our newsletter.',
      duration: 5000,
      variant: 'success',
    });
    setEmail('');
  };

  return (
    <section className='mt-10 md:mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-start lg:flex md:px-8'>
      <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
        <h1 className='text-app_primary_gray font-bold text-4xl xl:text-5xl'>
          {HERO_TITLE}
          <span className='text-primary_main'> {APP_NAME}</span>
        </h1>
        <p className='text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0'>
          {HERO_DESC}
        </p>
        <div>
          <p className='text-app_primary_gray py-3'>{NEWSLETTER}</p>
          <form className='items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72'
            />
            <PrimaryButton
              size={'md'}
              variant={'destructive'}
              onClick={mimicSubscription}
              type='submit'
            >
              {ButtonEnums.SUBSCRIBE}
            </PrimaryButton>
          </form>
        </div>
      </div>
      <div className='flex-1 text-center mt-4 lg:mt-0 lg:ml-3'>
        <img
          src='https://i.postimg.cc/kgd4WhyS/container.png'
          className='w-full mx-auto sm:w-10/12  lg:w-full'
        />
      </div>
    </section>
  );
};
