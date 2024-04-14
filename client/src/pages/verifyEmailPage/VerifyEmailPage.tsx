/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from '@/components/ui/card';
import { AuthHeader } from '../authenticationPage/components/AuthHeader';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import authApi from '@/api/authApi';
import { useCallback, useState } from 'react';
import { XCircle } from 'lucide-react';
import { router } from '@/router/AppRouter';
import { toast } from '@/components/ui/use-toast';

const VerifyPageEmail = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState<string>('');

  // TO:DO
  // redirect if there is no token or email provided

  const verifyEmail = useCallback(async () => {
    try {
      const result = await authApi.verifyEmail({
        email: searchParams.get('email') as string,
        verificationToken: searchParams.get('token') as string,
      });
      router.navigate('/auth');
      toast({
        title: result.msg,
        description: 'Proceed to login.',
        variant: 'default',
      });
      setMessage('');
    } catch (error: any) {
      setMessage(error.response?.data?.msg);
    }
  }, [searchParams]);

  return (
    <div className='w-full lg:grid lg:min-h-screen lg:grid-cols-1 xl:min-h-screen '>
      <div className='flex items-center justify-center py-12 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <Card className='p-6'>
          {message && (
            <div
              className={`w-full bg-destructive/80 mb-6 rounded-md py-1 px-2 text-muted font-[500] text-base flex flex-row space-x-2 items-center`}
            >
              <XCircle className='h-4 w-4' />
              <span>{message}</span>
            </div>
          )}
          <div className='mx-auto grid w-[350px] gap-6'>
            <AuthHeader
              title='Verify Email'
              description='Please verify your email to continue.'
            />
            <Button className='w-full' onClick={verifyEmail}>
              Verify Email
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VerifyPageEmail;
