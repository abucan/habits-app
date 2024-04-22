import { FormTextInput } from '.';
// import { PrimaryButton } from './buttons/primary-button';
import { Form } from './ui/form';
// import { ButtonEnums } from '@/ts/enums/app_enums';
import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from './ui/separator';

export const AddHabitForm = () => {
  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (values: any) => {
    console.log(values);
  };

  //   const { isSubmitting, isValid, errors } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 w-full flex flex-col items-center justify-center'
      >
        <div className='w-full space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
          <FormTextInput name='habitName' label='Name of habit' />
          <Separator className='w-full' />
        </div>
      </form>
    </Form>
  );
};
