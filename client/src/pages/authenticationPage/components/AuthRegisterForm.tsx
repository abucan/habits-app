import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { RegisterFormValues } from '@/ts/types/app_types';
import { registerSchema } from '@/ts/schemas/app_schemas';
import { FormTextInput } from '../../../components/FormTextInput';
import { registerUser } from '@/features/userSlice';
import { useAppDispatch } from '@/store/configureStore';

export const AuthRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const result = await dispatch(registerUser(values));
      console.log(result.payload);
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
          name='name'
          label='Username'
          placeholder='john'
        />
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
