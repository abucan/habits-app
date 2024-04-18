import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormTextInputProps } from '@/ts/interfaces/app_interfaces';
import { useFormContext } from 'react-hook-form';

export const FormTextInput = ({
  name,
  label,
  description,
  placeholder,
  disabled,
}: FormTextInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              disabled={disabled}
              type={name === 'password' ? 'password' : 'text'}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
