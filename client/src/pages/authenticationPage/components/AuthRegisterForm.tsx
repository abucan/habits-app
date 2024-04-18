/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormMessage } from '@/components/ui/form';
import { RegisterFormValues } from '@/ts/types/app_types';
import { registerSchema } from '@/ts/schemas/app_schemas';
import { FormTextInput } from '../../../components/custom-text-input';
import authApi from '@/api/authApi';
import { toast } from '@/components/ui/use-toast';
import { CircleAlertIcon } from 'lucide-react';
import { useEffect } from 'react';
import { PrimaryButton } from '@/components/buttons/primary-button';
import { ButtonEnums } from '@/ts/enums/app_enums';

export const AuthRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const { isSubmitting, isValid, errors } = form.formState;
  const { reset, formState } = form;

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const result = await authApi.register(values);
      toast({
        title: 'Created an account!',
        description:
          result?.msg || 'Please check your email to verify your account.',
        variant: 'default',
      });
      reset();
    } catch (error: any) {
      form.setError('root', {
        message: error?.response?.data?.msg,
      });
      return null;
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormTextInput name='name' label='Username' placeholder='john' />
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
          {ButtonEnums.REGISTER}
        </PrimaryButton>
      </form>
    </Form>
  );
};
