/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-boolean-cast */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormMessage } from '@/components/ui/form';
import { LoginFormValues } from '@/ts/types/app_types';
import { loginSchema } from '@/ts/schemas/app_schemas';
import { FormTextInput } from '../../../components/custom-text-input';
import { useAppDispatch } from '@/store/configureStore';
import { setUser } from '@/features/userSlice';
import { CircleAlertIcon } from 'lucide-react';
import authApi from '@/api/authApi';
import { toast } from '@/components/ui/use-toast';
import { PrimaryButton } from '@/components/buttons/primary-button';
import { ButtonEnums } from '@/ts/enums/app_enums';

export const AuthLoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const user = await authApi.login(values);
      console.log(user);

      dispatch(setUser(user));
      toast({
        title: 'Welcome!',
        description: `Hey ${user.user.name}, nice to see you again!`,
        variant: 'default',
      });
    } catch (error: any) {
      form.setError('root', {
        message: error?.response?.data?.msg,
      });
      return null;
    }
  };

  const { isSubmitting, isValid, errors } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormTextInput
          name='email'
          label='Email'
          placeholder='johndoe@mail.com'
        />
        <FormTextInput name='password' label='Password' placeholder='*******' />
        {errors.root && (
          <FormMessage className=' bg-destructive/80 text-muted p-2 rounded-md flex flex-row items-center'>
            <CircleAlertIcon className='h-4 w-4 mr-2' />
            {errors.root.message}
          </FormMessage>
        )}
        <PrimaryButton
          className='w-full disabled:bg-app_primary_gray'
          disabled={isSubmitting || !isValid}
          type='submit'
        >
          {ButtonEnums.LOGIN}
        </PrimaryButton>
      </form>
    </Form>
  );
};
