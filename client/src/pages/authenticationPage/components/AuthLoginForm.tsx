/* eslint-disable no-extra-boolean-cast */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { LoginFormValues } from '@/ts/types/app_types';
import { loginSchema } from '@/ts/schemas/app_schemas';
import { FormTextInput } from '../../../components/FormTextInput';
import { useAppDispatch } from '@/store/configureStore';
import { loginUser } from '@/features/userSlice';

export const AuthLoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const user = await dispatch(loginUser(values));
      if (!!user.payload) console.log('passed');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
      >
        <FormTextInput
          name='email'
          label='Email'
          placeholder='johndoe@mail.com'
        />
        <FormTextInput
          name='password'
          label='Password'
          placeholder='*******'
        />
        <Button type='submit' className='w-full'>
          Submit
        </Button>
      </form>
    </Form>
  );
};
