import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { FormTextInputProps } from '@/ts/interfaces/app_interfaces';
import { useFormContext } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from './ui/select';
import { getAccountIcon, iconMap } from '@/utils/iconMap';

export const CustomSelectColor = ({
  name,
  label,
  description,
  placeholder,
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
            <Select onValueChange={field.onChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {iconMap.map((icon) => {
                    const Icon = getAccountIcon(icon.iconName);
                    return (
                      <SelectItem key={icon.iconName} value={icon.iconName}>
                        <div>
                          <span className='h-4 w-4 text-gray-700'>
                            <Icon />
                          </span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
