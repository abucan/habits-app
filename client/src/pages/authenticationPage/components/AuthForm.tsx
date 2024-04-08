import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { LoginFormValues } from '@/ts/types/app_types';
import { loginSchema } from '@/ts/schemas/app_schemas';
import { FormTextInput } from './FormTextInput';

export const ProfileForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormTextInput
          name='username'
          label='Username'
          description='Enter your username'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
