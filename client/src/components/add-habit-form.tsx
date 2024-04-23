import { CustomSelectInput, FormTextInput } from '.';
// import { PrimaryButton } from './buttons/primary-button';
import { Form } from './ui/form';
// import { ButtonEnums } from '@/ts/enums/app_enums';
import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from './ui/separator';
import { CustomSelectColor } from './custom-select-color';

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
          <div className='flex flex-row items-center justify-center space-x-4'>
            <FormTextInput name='habitName' label='Name of habit' />
            <CustomSelectInput
              name='icon'
              label='Icon'
              placeholder='Pick Icon'
            />
            <CustomSelectColor
              name='color'
              label='Color'
              placeholder='Pick color'
            />
          </div>
          <Separator className='w-full' />
        </div>
      </form>
    </Form>
  );
};
